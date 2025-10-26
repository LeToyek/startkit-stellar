import { useState } from 'react';
import { Palette, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useUIStore } from '@/store/uiStore';
import { applyThemeColors, COLOR_PRESETS, hexToHSL } from '@/lib/themeUtils';

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useUIStore();
  const [customColor, setCustomColor] = useState('#3b82f6');

  const handleColorChange = (color: string) => {
    setCustomColor(color);
    applyThemeColors(color, theme === 'dark');
  };

  const handlePresetClick = (color: string) => {
    setCustomColor(color);
    applyThemeColors(color, theme === 'dark');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyThemeColors(customColor, newTheme === 'dark');
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        <Palette className="h-6 w-6" />
      </Button>

      {/* Customizer Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fade-in">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Theme Customizer</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Theme Mode */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Theme Mode</Label>
                  <div className="flex gap-3">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => {
                        setTheme('light');
                        applyThemeColors(customColor, false);
                      }}
                    >
                      <Sun className="h-4 w-4 mr-2" />
                      Light
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => {
                        setTheme('dark');
                        applyThemeColors(customColor, true);
                      }}
                    >
                      <Moon className="h-4 w-4 mr-2" />
                      Dark
                    </Button>
                  </div>
                </div>

                {/* Color Presets */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Color Presets</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(COLOR_PRESETS).map(([name, color]) => (
                      <button
                        key={name}
                        onClick={() => handlePresetClick(color)}
                        className="group relative aspect-square rounded-lg border-2 hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: color,
                          borderColor: customColor === color ? 'hsl(var(--primary))' : 'transparent',
                        }}
                        title={name}
                      >
                        <span className="sr-only">{name}</span>
                        {customColor === color && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Color Picker */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Custom Color</Label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="color"
                      value={customColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="h-12 w-16 rounded-lg cursor-pointer border-2"
                    />
                    <input
                      type="text"
                      value={customColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="flex-1 h-12 px-3 rounded-lg border bg-background font-mono text-sm"
                      placeholder="#3b82f6"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose a custom primary color. Secondary and accent colors will be generated automatically.
                  </p>
                </div>

                {/* Color Preview */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Color Preview</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary text-primary-foreground">
                      <span className="text-sm font-medium">Primary</span>
                      <div className="h-6 w-6 rounded border border-primary-foreground/20" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-secondary text-secondary-foreground">
                      <span className="text-sm font-medium">Secondary</span>
                      <div className="h-6 w-6 rounded border border-secondary-foreground/20" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-accent text-accent-foreground">
                      <span className="text-sm font-medium">Accent</span>
                      <div className="h-6 w-6 rounded border border-accent-foreground/20" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 rounded-lg bg-muted text-sm text-muted-foreground">
                  <p>
                    The theme customizer allows you to personalize the color scheme. 
                    All changes are applied in real-time and will automatically adjust 
                    complementary colors throughout the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
