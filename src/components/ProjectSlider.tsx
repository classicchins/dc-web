import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'ClosetNow',
    categories: ['Brand', 'Web', 'Development'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2187&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Ditto Platform',
    categories: ['Brand', 'Web', 'Development'],
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?q=80&w=2187&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Workspace',
    categories: ['Design', 'Development'],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2187&auto=format&fit=crop'
  }
];

export function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === activeIndex 
              ? "opacity-100 translate-y-0" 
              : index < activeIndex 
                ? "opacity-0 -translate-y-full" 
                : "opacity-0 translate-y-full"
          )}
        >
          {/* Project Image */}
          <div className="relative h-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Project Info */}
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-end justify-between text-white">
              <div>
                <h2 className="text-5xl font-bold mb-2">{project.title}</h2>
                <p className="text-lg text-white/80">{project.categories.join(', ')}</p>
              </div>
              
              {/* Navigation */}
              <div className="flex gap-3">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-12 h-1 transition-all duration-300",
                      idx === activeIndex 
                        ? "bg-white" 
                        : "bg-white/40 hover:bg-white/60"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}