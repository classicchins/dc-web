import { Palette } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Palette className="h-8 w-8" />
      <span className="text-2xl font-bold">DesignCrew</span>
    </div>
  );
}