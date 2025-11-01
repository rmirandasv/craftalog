import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ColorPickerProps {
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export function ColorPicker({
  id,
  name,
  label,
  defaultValue = '#000000',
  className,
  onChange,
}: ColorPickerProps) {
  const [color, setColor] = useState(defaultValue);
  const [textValue, setTextValue] = useState(defaultValue);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setTextValue(newColor);
    onChange?.(newColor);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    
    // Ensure it starts with #
    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    
    setTextValue(value);
    
    // Only update the color picker if it's a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      setColor(value);
      onChange?.(value);
    }
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Input
            id={id}
            type="color"
            name={name}
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="h-12 w-24 cursor-pointer border-2 p-1"
          />
        </div>
        <Input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          className="flex-1 font-mono text-sm uppercase"
          placeholder="#000000"
          maxLength={7}
        />
        <div
          className="h-12 w-12 rounded-md border-2 shadow-sm"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

