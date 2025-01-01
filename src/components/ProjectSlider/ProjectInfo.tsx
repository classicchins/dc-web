interface ProjectInfoProps {
  title: string;
  categories: readonly string[];
}

export function ProjectInfo({ title, categories }: ProjectInfoProps) {
  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-base text-white/80">{categories.join(', ')}</p>
    </div>
  );
}