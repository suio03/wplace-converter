export interface WplaceColor {
  hex: string;
  name: string;
  isPremium: boolean;
}

export const WPLACE_PALETTE: WplaceColor[] = [
  // Row 1 - Free colors
  { hex: '#FFFFFF', name: 'White', isPremium: false },
  { hex: '#E4E4E4', name: 'Light Gray', isPremium: false },
  { hex: '#888888', name: 'Gray', isPremium: false },
  { hex: '#222222', name: 'Dark Gray', isPremium: false },
  { hex: '#FFA7D1', name: 'Pink', isPremium: false },
  { hex: '#E50000', name: 'Red', isPremium: false },
  { hex: '#E59500', name: 'Orange', isPremium: false },
  { hex: '#A06A42', name: 'Brown', isPremium: false },
  
  // Row 2 - Free colors
  { hex: '#E5D900', name: 'Yellow', isPremium: false },
  { hex: '#94E044', name: 'Light Green', isPremium: false },
  { hex: '#02BE01', name: 'Green', isPremium: false },
  { hex: '#00D3DD', name: 'Cyan', isPremium: false },
  { hex: '#0083C7', name: 'Blue', isPremium: false },
  { hex: '#0000EA', name: 'Dark Blue', isPremium: false },
  { hex: '#CF6EE4', name: 'Light Purple', isPremium: false },
  { hex: '#820080', name: 'Purple', isPremium: false },
  
  // Row 3 - Premium colors
  { hex: '#F4F4F4', name: 'Off White', isPremium: true },
  { hex: '#C0C0C0', name: 'Silver', isPremium: true },
  { hex: '#666666', name: 'Medium Gray', isPremium: true },
  { hex: '#111111', name: 'Black', isPremium: true },
  { hex: '#FF85C1', name: 'Hot Pink', isPremium: true },
  { hex: '#B50000', name: 'Dark Red', isPremium: true },
  { hex: '#B56C00', name: 'Dark Orange', isPremium: true },
  { hex: '#7A4F32', name: 'Dark Brown', isPremium: true },
  
  // Row 4 - Premium colors
  { hex: '#B5A700', name: 'Dark Yellow', isPremium: true },
  { hex: '#6BB032', name: 'Forest Green', isPremium: true },
  { hex: '#018E01', name: 'Dark Green', isPremium: true },
  { hex: '#00A3AD', name: 'Teal', isPremium: true },
  { hex: '#005F8F', name: 'Navy Blue', isPremium: true },
  { hex: '#0000B0', name: 'Midnight Blue', isPremium: true },
  { hex: '#9F4EB4', name: 'Dark Purple', isPremium: true },
  { hex: '#620060', name: 'Deep Purple', isPremium: true },
  
  // Row 5 - Premium colors
  { hex: '#F0F0F0', name: 'Pearl White', isPremium: true },
  { hex: '#D4D4D4', name: 'Light Silver', isPremium: true },
  { hex: '#555555', name: 'Charcoal', isPremium: true },
  { hex: '#000000', name: 'Pure Black', isPremium: true },
  { hex: '#FF6BB3', name: 'Bright Pink', isPremium: true },
  { hex: '#950000', name: 'Crimson', isPremium: true },
  { hex: '#954C00', name: 'Burnt Orange', isPremium: true },
  { hex: '#6A422A', name: 'Chocolate', isPremium: true },
  
  // Row 6 - Premium colors
  { hex: '#958700', name: 'Olive', isPremium: true },
  { hex: '#5B9028', name: 'Pine Green', isPremium: true },
  { hex: '#016E01', name: 'Hunter Green', isPremium: true },
  { hex: '#00838D', name: 'Dark Teal', isPremium: true },
  { hex: '#004A77', name: 'Deep Blue', isPremium: true },
  { hex: '#000090', name: 'Royal Blue', isPremium: true },
  { hex: '#8B3E9F', name: 'Plum', isPremium: true },
  { hex: '#520050', name: 'Eggplant', isPremium: true },
  
  // Row 7 - Premium colors
  { hex: '#EBEBEB', name: 'Cream', isPremium: true },
  { hex: '#BABABA', name: 'Platinum', isPremium: true },
  { hex: '#444444', name: 'Slate', isPremium: true },
  { hex: '#0A0A0A', name: 'Void Black', isPremium: true },
  { hex: '#FF519E', name: 'Magenta', isPremium: true },
  { hex: '#750000', name: 'Maroon', isPremium: true },
  { hex: '#753C00', name: 'Amber', isPremium: true },
  { hex: '#5A3522', name: 'Espresso', isPremium: true },
  
  // Row 8 - Premium colors
  { hex: '#756700', name: 'Mustard', isPremium: true },
  { hex: '#4B701E', name: 'Moss', isPremium: true },
  { hex: '#014E01', name: 'Emerald', isPremium: true },
  { hex: '#00636D', name: 'Peacock', isPremium: true },
  { hex: '#00355F', name: 'Sapphire', isPremium: true },
  { hex: '#000070', name: 'Indigo', isPremium: true },
  { hex: '#7B2E8A', name: 'Violet', isPremium: true },
  { hex: '#420040', name: 'Burgundy', isPremium: true },
];

export function getClosestColor(targetHex: string): WplaceColor {
  const target = hexToRgb(targetHex);
  if (!target) return WPLACE_PALETTE[0];
  
  let closestColor = WPLACE_PALETTE[0];
  let minDistance = Infinity;
  
  for (const color of WPLACE_PALETTE) {
    const rgb = hexToRgb(color.hex);
    if (!rgb) continue;
    
    const distance = Math.sqrt(
      Math.pow(target.r - rgb.r, 2) +
      Math.pow(target.g - rgb.g, 2) +
      Math.pow(target.b - rgb.b, 2)
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }
  
  return closestColor;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export const FREE_COLORS = WPLACE_PALETTE.filter(color => !color.isPremium);
export const PREMIUM_COLORS = WPLACE_PALETTE.filter(color => color.isPremium);