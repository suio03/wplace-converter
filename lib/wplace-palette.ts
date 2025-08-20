export interface WplaceColor {
  hex: string;
  name: string;
  isPremium: boolean;
}

export const WPLACE_PALETTE: WplaceColor[] = [
  // Accurate Wplace.live colors based on provided data
  { hex: '#000000', name: 'Black', isPremium: false },
  { hex: '#3C3C3C', name: 'Dark Gray', isPremium: false },
  { hex: '#787878', name: 'Gray', isPremium: false },
  { hex: '#AAAAAA', name: 'Medium Gray', isPremium: true },
  { hex: '#D2D2D2', name: 'Light Gray', isPremium: false },
  { hex: '#FFFFFF', name: 'White', isPremium: false },
  { hex: '#600018', name: 'Deep Red', isPremium: false },
  { hex: '#A50E1E', name: 'Dark Red', isPremium: true },
  { hex: '#ED1C24', name: 'Red', isPremium: false },
  { hex: '#FA8072', name: 'Light Red', isPremium: true },
  { hex: '#E45C1A', name: 'Dark Orange', isPremium: true },
  { hex: '#FF7F27', name: 'Orange', isPremium: false },
  { hex: '#F6AA09', name: 'Gold', isPremium: false },
  { hex: '#F9DD3B', name: 'Yellow', isPremium: false },
  { hex: '#FFFABC', name: 'Light Yellow', isPremium: false },
  { hex: '#9C8431', name: 'Dark Goldenrod', isPremium: true },
  { hex: '#C5AD31', name: 'Goldenrod', isPremium: true },
  { hex: '#E8D45F', name: 'Light Goldenrod', isPremium: true },
  { hex: '#4A6B3A', name: 'Dark Olive', isPremium: true },
  { hex: '#5A944A', name: 'Olive', isPremium: true },
  { hex: '#84C573', name: 'Light Olive', isPremium: true },
  { hex: '#0EB968', name: 'Dark Green', isPremium: false },
  { hex: '#13E67B', name: 'Green', isPremium: false },
  { hex: '#87FF5E', name: 'Light Green', isPremium: false },
  { hex: '#0C816E', name: 'Dark Teal', isPremium: false },
  { hex: '#10AEA6', name: 'Teal', isPremium: false },
  { hex: '#13E1BE', name: 'Light Teal', isPremium: false },
  { hex: '#0F799F', name: 'Dark Cyan', isPremium: true },
  { hex: '#60F7F2', name: 'Cyan', isPremium: false },
  { hex: '#BBF6F2', name: 'Light Cyan', isPremium: true },
  { hex: '#28509E', name: 'Dark Blue', isPremium: false },
  { hex: '#4093E4', name: 'Blue', isPremium: false },
  { hex: '#7DC7FF', name: 'Light Blue', isPremium: true },
  { hex: '#4D31B8', name: 'Dark Indigo', isPremium: true },
  { hex: '#6B50F6', name: 'Indigo', isPremium: false },
  { hex: '#99B1FB', name: 'Light Indigo', isPremium: false },
  { hex: '#4A4284', name: 'Dark Slate Blue', isPremium: true },
  { hex: '#7A71C4', name: 'Slate Blue', isPremium: true },
  { hex: '#B5AEF1', name: 'Light Slate Blue', isPremium: true },
  { hex: '#780C99', name: 'Dark Purple', isPremium: false },
  { hex: '#AA38B9', name: 'Purple', isPremium: false },
  { hex: '#E09FF9', name: 'Light Purple', isPremium: false },
  { hex: '#CB007A', name: 'Dark Pink', isPremium: false },
  { hex: '#EC1F80', name: 'Pink', isPremium: false },
  { hex: '#F38DA9', name: 'Light Pink', isPremium: false },
  { hex: '#9B5249', name: 'Dark Peach', isPremium: true },
  { hex: '#D18078', name: 'Peach', isPremium: true },
  { hex: '#FAB6A4', name: 'Light Peach', isPremium: true },
  { hex: '#684634', name: 'Dark Brown', isPremium: false },
  { hex: '#95682A', name: 'Brown', isPremium: false },
  { hex: '#DBA463', name: 'Light Brown', isPremium: true },
  { hex: '#7B6352', name: 'Dark Tan', isPremium: true },
  { hex: '#9C846B', name: 'Tan', isPremium: true },
  { hex: '#D6B594', name: 'Light Tan', isPremium: true },
  { hex: '#D18051', name: 'Dark Beige', isPremium: true },
  { hex: '#F8B277', name: 'Beige', isPremium: false },
  { hex: '#FFC5A5', name: 'Light Beige', isPremium: true },
  { hex: '#6D643F', name: 'Dark Stone', isPremium: true },
  { hex: '#948C6B', name: 'Stone', isPremium: true },
  { hex: '#CDC59E', name: 'Light Stone', isPremium: true },
  { hex: '#333941', name: 'Dark Slate', isPremium: true },
  { hex: '#6D758D', name: 'Slate', isPremium: true },
  { hex: '#B3B9D1', name: 'Light Slate', isPremium: true },
  { hex: 'transparent', name: 'Transparent', isPremium: false },
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