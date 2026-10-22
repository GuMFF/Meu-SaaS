type ProjectCardProps = {
  name: string;
};

export function ProjectCard({ name }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{name}</h3>
    </article>
  );
}
