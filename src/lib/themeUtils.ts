/**
 * Theme utility functions for color manipulation and palette generation
 */

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
}

/**
 * Convert hex color to HSL
 */
export function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Generate complementary colors from a base color
 */
export function generateComplementaryColor(hsl: { h: number; s: number; l: number }): string {
  const complementaryH = (hsl.h + 180) % 360;
  return `${complementaryH} ${hsl.s}% ${hsl.l}%`;
}

/**
 * Generate secondary color (analogous)
 */
export function generateSecondaryColor(hsl: { h: number; s: number; l: number }): string {
  const secondaryH = (hsl.h + 30) % 360;
  const secondaryS = Math.max(10, hsl.s - 5);
  const secondaryL = Math.min(95, hsl.l + 35);
  return `${secondaryH} ${secondaryS}% ${secondaryL}%`;
}

/**
 * Generate accent color (triadic)
 */
export function generateAccentColor(hsl: { h: number; s: number; l: number }): string {
  const accentH = (hsl.h + 120) % 360;
  return `${accentH} ${hsl.s}% ${hsl.l}%`;
}

/**
 * Apply theme colors to CSS variables
 */
export function applyThemeColors(primaryHex: string, isDark: boolean = false) {
  const primaryHSL = hexToHSL(primaryHex);
  const primaryStr = `${primaryHSL.h} ${primaryHSL.s}% ${primaryHSL.l}%`;
  const secondaryStr = generateSecondaryColor(primaryHSL);
  const accentStr = generateAccentColor(primaryHSL);
  
  const root = document.documentElement;
  
  // Set primary color
  root.style.setProperty('--primary', primaryStr);
  root.style.setProperty('--secondary', secondaryStr);
  root.style.setProperty('--accent', accentStr);
  
  // Update ring color to match primary
  root.style.setProperty('--ring', primaryStr);
  
  // Update sidebar colors
  root.style.setProperty('--sidebar-primary', primaryStr);
  root.style.setProperty('--sidebar-ring', primaryStr);
  
  // Update gradient
  const gradientPrimary = `linear-gradient(135deg, hsl(${primaryStr}) 0%, hsl(${accentStr}) 100%)`;
  root.style.setProperty('--gradient-primary', gradientPrimary);
}

/**
 * Get current theme colors from CSS variables
 */
export function getCurrentThemeColors(): ThemeColors {
  const root = getComputedStyle(document.documentElement);
  
  return {
    primary: root.getPropertyValue('--primary').trim(),
    secondary: root.getPropertyValue('--secondary').trim(),
    accent: root.getPropertyValue('--accent').trim(),
    background: root.getPropertyValue('--background').trim(),
    foreground: root.getPropertyValue('--foreground').trim(),
  };
}

/**
 * Preset color themes
 */
export const COLOR_PRESETS = {
  blue: '#3b82f6',
  purple: '#8b5cf6',
  green: '#10b981',
  orange: '#f97316',
  pink: '#ec4899',
  teal: '#14b8a6',
  indigo: '#6366f1',
  red: '#ef4444',
};
