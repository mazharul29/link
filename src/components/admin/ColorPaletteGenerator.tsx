"use client";

import { useState } from 'react';
import { generateColorPalette } from '@/ai/flows/generate-color-palette';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

export function ColorPaletteGenerator() {
  const [startColor, setStartColor] = useState('#7F00FF');
  const [palette, setPalette] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(startColor)) {
      toast({
        title: 'Invalid Color',
        description: 'Please enter a valid hex color code (e.g., #7F00FF).',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setPalette([]);
    try {
      const result = await generateColorPalette({ primaryColor: startColor });
      setPalette(result.palette);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Generation Failed',
        description:
          'Could not generate palette. Please check the console for errors.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
    toast({
        title: `Copied ${color}`,
        description: 'Color copied to clipboard.',
    })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-2">
          <Input
            type="text"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
            placeholder="Enter hex color (e.g. #7F00FF)"
            className="max-w-xs"
          />
          <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Generate
          </Button>
        </div>
        {palette.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">Suggested Palette:</h4>
            <div className="flex gap-2 flex-wrap">
              {palette.map((color) => (
                <div
                  key={color}
                  className="group relative h-16 w-16 rounded-md cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => handleCopy(color)}
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-mono">{color}</span>
                    </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
