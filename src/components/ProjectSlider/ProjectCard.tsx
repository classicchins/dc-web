import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  categories: readonly string[];
  image: string;
  index: number;
  activeIndex: number;
  total: number;
}

export function ProjectCard({ 
  title, 
  categories, 
  image, 
  index, 
  activeIndex,
  total
}: ProjectCardProps) {
  // Calculate rotation angle based on position in wheel
  const angle = ((index - activeIndex) * (360 / total)) % 360;
  const radius = 800; // Radius of the rotation wheel
  
  return (
    <Card
      className={cn(
        "absolute w-[700px] h-[400px] transition-all duration-700",
        "rounded-3xl overflow-hidden shadow-lg",
        "transform-gpu will-change-transform",
        index === activeIndex ? "z-10" : "z-0"
      )}
      style={{
        transform: `
          translate3d(0, ${Math.sin(angle * Math.PI / 180) * radius}px, ${Math.cos(angle * Math.PI / 180) * radius - radius}px)
          rotateX(${-angle}deg)
          scale(${1 - Math.abs(angle) / 360 * 0.2})
        `,
        opacity: 1 - Math.abs(angle) / 180,
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute bottom-8 left-8">
          <h3 className="text-3xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/80">
            {categories.join(' · ')}
          </p>
        </div>
      </div>
    </Card>
  );
}