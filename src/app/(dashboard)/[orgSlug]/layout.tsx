import { getActiveTenant } from "@/lib/auth-guard";

export default async function OrgLayout({
  children,
  params,
}: LayoutProps<"/[orgSlug]">) {
  const { orgSlug } = await params;
  await getActiveTenant(orgSlug);

  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}
