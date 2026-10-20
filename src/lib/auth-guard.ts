import { redirect } from "next/navigation";
import type { Role } from "@prisma/client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getActiveTenant(orgSlug: string) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const membership = await prisma.membership.findFirst({
    where: {
      userId: session.user.id,
      organization: { slug: orgSlug },
    },
    include: { organization: true },
  });

  if (!membership) {
    redirect("/onboarding");
  }

  return membership;
}

export async function checkRole(
  orgSlug: string,
  allowedRoles: Role[],
) {
  const membership = await getActiveTenant(orgSlug);

  if (!allowedRoles.includes(membership.role)) {
    redirect(`/${orgSlug}`);
  }

  return membership;
}
