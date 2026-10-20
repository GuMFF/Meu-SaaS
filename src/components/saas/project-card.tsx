type ProjectCardProps = {
  name: string;
};

export function ProjectCard({ name }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-zinc-900">{name}</h3>
    </article>
  );
}
