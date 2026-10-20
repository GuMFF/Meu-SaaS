import { PlanBadge } from "@/components/saas/plan-badge";
import { ProjectCard } from "@/components/saas/project-card";
import { getActiveTenant } from "@/lib/auth-guard";

export default async function OrgDashboardPage({
  params,
}: PageProps<"/[orgSlug]">) {
  const { orgSlug } = await params;
  const membership = await getActiveTenant(orgSlug);
  const { organization } = membership;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">
            {organization.name}
          </h1>
          <p className="text-sm text-zinc-600">/{organization.slug}</p>
        </div>
        <PlanBadge plan={organization.plan} />
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-zinc-700">Projetos</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <ProjectCard name="Nenhum projeto ainda" />
        </div>
      </section>
    </main>
  );
}
