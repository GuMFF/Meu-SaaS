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
    <main className="dashboard">
      <header>
        <div>
          <h1>{organization.name}</h1>
          <p>/{organization.slug}</p>
        </div>
        <PlanBadge plan={organization.plan} />
      </header>

      <section>
        <h2 className="hint">Projetos</h2>
        <div className="grid">
          <ProjectCard name="Nenhum projeto ainda" />
        </div>
      </section>
    </main>
  );
}
