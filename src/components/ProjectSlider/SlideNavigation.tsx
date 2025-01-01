import { cn } from '@/lib/utils';

interface SlideNavigationProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

export function SlideNavigation({ total, active, onChange }: SlideNavigationProps) {
  return (
    <div className="flex gap-3">
      {Array.from({ length: total }, (_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className={cn(
            "w-12 h-1 transition-all duration-300",
            idx === active 
              ? "bg-white" 
              : "bg-white/40 hover:bg-white/60"
          )}
        />
      ))}
    </div>
  );
}