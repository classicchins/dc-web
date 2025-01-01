import { useState, useRef, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from './data';
import { useWheel } from './use-wheel';

export function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom hook to handle wheel events
  useWheel(containerRef, (direction) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  });

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ perspective: '2000px', perspectiveOrigin: '50% 50%' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[700px] h-[400px]">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={idx}
              activeIndex={activeIndex}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}