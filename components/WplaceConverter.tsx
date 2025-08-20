'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, Download, Eye, Grid3X3, Maximize2, X } from 'lucide-react';
import { WPLACE_PALETTE, WplaceColor, getClosestColor, hexToRgb, rgbToHex, FREE_COLORS } from '@/lib/wplace-palette';

interface ProcessedImage {
  canvas: HTMLCanvasElement;
  usedColors: { color: WplaceColor; count: number }[];
  totalPixels: number;
}

export default function WplaceConverter() {
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImage | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [freeColorsOnly, setFreeColorsOnly] = useState(false);
  const [gridSize, setGridSize] = useState(64);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [pixelSize, setPixelSize] = useState(20);
  const [scale, setScale] = useState(1.0);
  const [zoomLevel, setZoomLevel] = useState(3);
  const [fullscreenZoom, setFullscreenZoom] = useState(1);
  const [fullscreenPan, setFullscreenPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });
  const [fullscreenShowGrid, setFullscreenShowGrid] = useState(true);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const processImage = useCallback((img: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Set canvas to selected grid size
    canvas.width = gridSize;
    canvas.height = gridSize;
    
    // Draw and resize image
    ctx.drawImage(img, 0, 0, gridSize, gridSize);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, gridSize, gridSize);
    const data = imageData.data;
    
    const colorCounts = new Map<string, number>();
    const usedColors = new Map<string, WplaceColor>();
    
    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const originalHex = rgbToHex(r, g, b);
      
      // Find closest Wplace color
      let closestColor = getClosestColor(originalHex);
      
      // If free colors only, restrict to free palette
      if (freeColorsOnly) {
        let minDistance = Infinity;
        const targetRgb = hexToRgb(originalHex);
        if (targetRgb) {
          for (const color of FREE_COLORS) {
            const rgb = hexToRgb(color.hex);
            if (!rgb) continue;
            
            const distance = Math.sqrt(
              Math.pow(targetRgb.r - rgb.r, 2) +
              Math.pow(targetRgb.g - rgb.g, 2) +
              Math.pow(targetRgb.b - rgb.b, 2)
            );
            
            if (distance < minDistance) {
              minDistance = distance;
              closestColor = color;
            }
          }
        }
      }
      
      // Update pixel with closest color
      const rgb = hexToRgb(closestColor.hex);
      if (rgb) {
        data[i] = rgb.r;
        data[i + 1] = rgb.g;
        data[i + 2] = rgb.b;
        
        // Track color usage
        const count = colorCounts.get(closestColor.hex) || 0;
        colorCounts.set(closestColor.hex, count + 1);
        usedColors.set(closestColor.hex, closestColor);
      }
    }
    
    // Put processed data back
    ctx.putImageData(imageData, 0, 0);
    
    // Create used colors array
    const usedColorsArray = Array.from(usedColors.values())
      .map(color => ({
        color,
        count: colorCounts.get(color.hex) || 0
      }))
      .sort((a, b) => b.count - a.count);
    
    return {
      canvas,
      usedColors: usedColorsArray,
      totalPixels: gridSize * gridSize
    };
  }, [freeColorsOnly, gridSize]);

  const handleFileUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        const processed = processImage(img);
        if (processed) {
          setProcessedImage(processed);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [processImage]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        handleFileUpload(file);
      }
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [handleFileUpload]);

  const downloadImage = useCallback(() => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.download = 'wplace-converted-image.png';
    link.href = processedImage.canvas.toDataURL();
    link.click();
  }, [processedImage]);

  // Reprocess when settings change
  useEffect(() => {
    if (uploadedImage) {
      const processed = processImage(uploadedImage);
      if (processed) {
        setProcessedImage(processed);
      }
    }
  }, [uploadedImage, processImage, gridSize, freeColorsOnly]);

  const copyToClipboard = useCallback(() => {
    if (!processedImage) return;
    
    processedImage.canvas.toBlob((blob) => {
      if (blob) {
        const item = new ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]).catch(console.error);
      }
    });
  }, [processedImage]);

  // Fullscreen zoom/pan handlers
  const handleFullscreenWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setFullscreenZoom(prev => Math.max(0.5, Math.min(10, prev + delta)));
  }, []);

  const handleFullscreenMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsPanning(true);
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  }, []);

  const handleFullscreenMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanning) {
      const deltaX = e.clientX - lastPanPoint.x;
      const deltaY = e.clientY - lastPanPoint.y;
      setFullscreenPan(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  }, [isPanning, lastPanPoint]);

  const handleFullscreenMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const resetFullscreenView = useCallback(() => {
    setFullscreenZoom(1);
    setFullscreenPan({ x: 0, y: 0 });
  }, []);

  // Reset fullscreen view when grid size changes
  useEffect(() => {
    if (isFullscreen) {
      setFullscreenZoom(1);
      setFullscreenPan({ x: 0, y: 0 });
    }
  }, [gridSize, isFullscreen]);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    setFullscreenZoom(1);
    setFullscreenPan({ x: 0, y: 0 });
  }, []);

  // ESC key to close fullscreen and handle body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      // Prevent body scrolling
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      // Add global event prevention
      const preventWheelScroll = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      const preventTouchScroll = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      // Add event listeners
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('wheel', preventWheelScroll, { passive: false });
      document.addEventListener('touchmove', preventTouchScroll, { passive: false });
      
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('wheel', preventWheelScroll);
        document.removeEventListener('touchmove', preventTouchScroll);
      };
    } else {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isFullscreen]);

  const renderPixelArt = () => {
    if (!processedImage) return null;

    // Ensure minimum visible size for small grids
    const baseSize = Math.max(pixelSize, 400 / gridSize); // Adaptive minimum size
    const displayPixelSize = baseSize * scale * (zoomLevel / 3);
    const displayWidth = gridSize * displayPixelSize;
    const displayHeight = gridSize * displayPixelSize;

    return (
      <div className="relative flex-1 flex flex-col">
        {/* Block Count Overlay */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm z-10">
          <div>Horizontal: {gridSize} blocks</div>
          <div>Vertical: {gridSize} blocks</div>
          <div className="font-bold">Total: {gridSize * gridSize} blocks</div>
        </div>

        {/* Canvas Container - FIXED SIZE */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gray-800 rounded-tl-lg relative">
          <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center w-[600px] h-[600px] relative">
            <canvas
              ref={canvasRef}
              width={displayWidth}
              height={displayHeight}
              className="block max-w-[580px] max-h-[580px] object-contain cursor-pointer"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '580px',
                maxHeight: '580px',
                imageRendering: 'pixelated'
              }}
              onClick={openFullscreen}
            />
            {/* Fullscreen Button */}
            <button
              onClick={openFullscreen}
              className="absolute top-4 right-4 p-2 bg-black/70 text-white rounded hover:bg-black/90 transition-colors"
              title="Open in fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Statistics and Buttons */}
        <div className="p-6 bg-gray-800 rounded-bl-lg border-t border-gray-700">
          {processedImage && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 text-sm text-gray-300">
                <span>Total: <span className="text-blue-400 font-bold">{processedImage.totalPixels.toLocaleString()}</span> blocks</span>
                <span>{gridSize}×{gridSize} ({processedImage.totalPixels.toLocaleString()} pixels)</span>
              </div>
            </div>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 border border-gray-600"
            >
              📄 Upload New Image
            </button>
            <button
              onClick={downloadImage}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={!processedImage}
            >
              ⬇️ Download
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Update canvas when settings change
  useEffect(() => {
    if (processedImage && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      // Ensure minimum visible size for small grids  
      const baseSize = Math.max(pixelSize, 400 / gridSize);
      const displayPixelSize = baseSize * scale * (zoomLevel / 3);
      const displayWidth = gridSize * displayPixelSize;
      const displayHeight = gridSize * displayPixelSize;

      // Update canvas size
      canvasRef.current.width = displayWidth;
      canvasRef.current.height = displayHeight;

      // Clear canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Get pixel data from the processed image
      const sourceCtx = processedImage.canvas.getContext('2d');
      if (!sourceCtx) return;
      
      const imageData = sourceCtx.getImageData(0, 0, gridSize, gridSize);
      const data = imageData.data;

      // Draw each pixel as a larger square
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          const i = (y * gridSize + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x * displayPixelSize, y * displayPixelSize, displayPixelSize, displayPixelSize);
        }
      }

      // Draw grid if enabled
      if (showGrid) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = Math.max(1, displayPixelSize * 0.05);
        
        // Draw vertical lines
        for (let x = 0; x <= gridSize; x++) {
          ctx.beginPath();
          ctx.moveTo(x * displayPixelSize, 0);
          ctx.lineTo(x * displayPixelSize, displayHeight);
          ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = 0; y <= gridSize; y++) {
          ctx.beginPath();
          ctx.moveTo(0, y * displayPixelSize);
          ctx.lineTo(displayWidth, y * displayPixelSize);
          ctx.stroke();
        }
      }
    }
  }, [processedImage, showGrid, pixelSize, scale, zoomLevel, gridSize]);

  const freeColorsCount = processedImage?.usedColors.filter(({ color }) => !color.isPremium).length || 0;
  const premiumColorsCount = processedImage?.usedColors.filter(({ color }) => color.isPremium).length || 0;

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Left Panel - Canvas */}
        <div className="flex-1 min-w-[700px] p-8 bg-gray-800">
          {!processedImage ? (
            <div className="flex-1 flex items-center justify-center p-12 bg-gray-800 rounded-tl-lg">
              <div
                className={`border-2 border-dashed rounded-lg flex items-center justify-center w-[600px] h-[600px] transition-colors ${
                  dragActive ? 'border-blue-400 bg-blue-400/10' : 'border-gray-600'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="text-center">
                  <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-400 mb-2">Drop an image here or</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Upload New Image
                  </button>
                </div>
              </div>
            </div>
          ) : (
            renderPixelArt()
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>

        {/* Right Panel - Controls */}
        <div className="w-full lg:w-[400px] min-w-[400px] bg-gray-900 p-6 space-y-6 rounded-tr-lg rounded-br-lg">
          
          {/* Grid Size Selector */}
          <div>
            <label className="block text-white font-medium mb-3">
              Grid Size
            </label>
            <select
              value={gridSize}
              onChange={(e) => setGridSize(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-3 text-white"
            >
              <option value={32}>32×32 1,024 pixels</option>
              <option value={48}>48×48 2,304 pixels</option>
              <option value={64}>64×64 4,096 pixels</option>
              <option value={96}>96×96 9,216 pixels</option>
              <option value={128}>128×128 16,384 pixels</option>
              <option value={256}>256×256 65,536 pixels</option>
              <option value={512}>512×512 262,144 pixels</option>
            </select>
          </div>

          {/* Display Mode */}
          <div>
            <label className="block text-white font-medium mb-3">
              Display Mode
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setShowGrid(false)}
                className={`flex-1 px-4 py-2 rounded font-medium transition-colors ${
                  !showGrid ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                👁️ Normal
              </button>
              <button
                onClick={() => setShowGrid(true)}
                className={`flex-1 px-4 py-2 rounded font-medium transition-colors ${
                  showGrid ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                🗂️ Grid
              </button>
            </div>
          </div>

          {/* Free Colors Only */}
          <div>
            <label className="block text-white font-medium mb-3">
              Free Colors Only
            </label>
            <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
              Use only free colors with our wplace pixel converter, automatically selecting the closest free color match
            </div>
              <label className="flex items-center ml-4">
                <input
                  type="checkbox"
                  checked={freeColorsOnly}
                  onChange={(e) => setFreeColorsOnly(e.target.checked)}
                  className="sr-only"
                />
                <div className={`relative w-12 h-6 rounded-full p-1 transition-colors ${freeColorsOnly ? 'bg-green-600' : 'bg-gray-600'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${freeColorsOnly ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </label>
            </div>
          </div>

          {/* Colors Used Section */}
          {processedImage && (
            <div>
              <h3 className="text-white font-medium mb-3">Colors Used in This Image</h3>
              <div className="flex items-center gap-6 mb-4 text-sm">
                <span className="text-gray-300">
                  Total: <span className="font-bold text-white">{processedImage.usedColors.length}</span>
                </span>
                <span className="text-gray-300">
                  Free: <span className="font-bold text-green-400">{freeColorsCount}</span>
                </span>
                <span className="text-gray-300">
                  Premium: <span className="font-bold text-orange-400">{premiumColorsCount}</span>
                </span>
              </div>
              
              <div className="text-xs text-gray-400 mb-3">
                These are all the colors from the Wplace palette used in your pixel art generated by our wplace pixel converter. Premium colors (with lock icons) need to be purchased on the official website.
              </div>
              
              <div className="grid grid-cols-10 gap-2 mb-6">
                {processedImage.usedColors.map(({ color, count }, index) => (
                  <div
                    key={index}
                    className="relative w-8 h-8 rounded border-2 border-gray-600 group cursor-pointer hover:border-white"
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} (${count} pixels) ${color.isPremium ? 'Premium' : 'Free'}`}
                  >
                    {color.isPremium && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs">🔒</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wplace Official Color Palette */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-medium">Official Wplace 64-color palette</h3>
              <span className="text-xs text-gray-400">64 colors</span>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-8 gap-1 mb-4">
                {WPLACE_PALETTE.map((color, index) => (
                  <div
                    key={index}
                    className="relative w-8 h-8 rounded border border-gray-600 cursor-pointer hover:border-white group"
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} ${color.isPremium ? '(Premium)' : '(Free)'}`}
                  >
                    {color.isPremium && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs">🔒</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-xs text-gray-400 mb-0">
                Official Wplace 64-color palette - complete match with the game. Our wplace pixel converter ensures perfect color accuracy.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal with Zoom/Pan */}
      {isFullscreen && processedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[9999]"
          onWheel={handleFullscreenWheel}
          style={{ touchAction: 'none' }}
        >
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Grid Size:</span>
                <select
                  value={gridSize}
                  onChange={(e) => setGridSize(Number(e.target.value))}
                  className="bg-black/50 border border-white/30 rounded px-2 py-1 text-sm text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value={32}>32×32 (1,024)</option>
                  <option value={48}>48×48 (2,304)</option>
                  <option value={64}>64×64 (4,096)</option>
                  <option value={96}>96×96 (9,216)</option>
                  <option value={128}>128×128 (16,384)</option>
                  <option value={256}>256×256 (65,536)</option>
                  <option value={512}>512×512 (262,144)</option>
                </select>
              </div>
              <span className="text-sm">
                Zoom: {Math.round(fullscreenZoom * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFullscreenShowGrid(!fullscreenShowGrid)}
                className={`px-3 h-8 rounded text-sm font-medium transition-colors ${
                  fullscreenShowGrid 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title={fullscreenShowGrid ? 'Hide Grid' : 'Show Grid'}
              >
                <Grid3X3 size={14} />
              </button>
              <div className="w-px h-6 bg-white/30"></div>
              <button
                onClick={() => setFullscreenZoom(prev => Math.min(10, prev + 0.5))}
                className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 flex items-center justify-center"
              >
                +
              </button>
              <button
                onClick={() => setFullscreenZoom(prev => Math.max(0.5, prev - 0.5))}
                className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 flex items-center justify-center"
              >
                −
              </button>
              <button
                onClick={resetFullscreenView}
                className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 flex items-center justify-center"
              >
                ⌂
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 text-white/70 text-sm">
            Scroll to zoom • Drag to pan • Grid button to toggle • ESC to close
          </div>

          {/* Fullscreen Canvas Container */}
          <div
            className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
            onWheel={handleFullscreenWheel}
            onMouseDown={handleFullscreenMouseDown}
            onMouseMove={handleFullscreenMouseMove}
            onMouseUp={handleFullscreenMouseUp}
            onMouseLeave={handleFullscreenMouseUp}
          >
            <div
              style={{
                transform: `translate(${fullscreenPan.x}px, ${fullscreenPan.y}px) scale(${fullscreenZoom})`,
                transformOrigin: 'center center'
              }}
            >
              <canvas
                width={gridSize * 8}
                height={gridSize * 8}
                style={{ 
                  imageRendering: 'pixelated',
                  width: `${gridSize * 8}px`,
                  height: `${gridSize * 8}px`
                }}
                key={`${fullscreenShowGrid}-${gridSize}-${processedImage?.totalPixels}`}
                ref={(canvas) => {
                  if (canvas && processedImage) {
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    
                    const pixelSize = 8;
                    const displayWidth = gridSize * pixelSize;
                    const displayHeight = gridSize * pixelSize;

                    // Clear canvas
                    ctx.clearRect(0, 0, displayWidth, displayHeight);

                    // Get pixel data
                    const sourceCtx = processedImage.canvas.getContext('2d');
                    if (!sourceCtx) return;
                    
                    const imageData = sourceCtx.getImageData(0, 0, gridSize, gridSize);
                    const data = imageData.data;

                    // Draw each pixel as a larger square
                    for (let y = 0; y < gridSize; y++) {
                      for (let x = 0; x < gridSize; x++) {
                        const i = (y * gridSize + x) * 4;
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                      }
                    }

                    // Draw grid if enabled in fullscreen
                    if (fullscreenShowGrid) {
                      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                      ctx.lineWidth = 1;
                      
                      // Draw vertical lines
                      for (let x = 0; x <= gridSize; x++) {
                        ctx.beginPath();
                        ctx.moveTo(x * pixelSize, 0);
                        ctx.lineTo(x * pixelSize, displayHeight);
                        ctx.stroke();
                      }
                      
                      // Draw horizontal lines
                      for (let y = 0; y <= gridSize; y++) {
                        ctx.beginPath();
                        ctx.moveTo(0, y * pixelSize);
                        ctx.lineTo(displayWidth, y * pixelSize);
                        ctx.stroke();
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}