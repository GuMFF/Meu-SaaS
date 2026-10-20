type PlanBadgeProps = {
  plan: "FREE" | "PRO" | "ENTERPRISE";
};

const labels: Record<PlanBadgeProps["plan"], string> = {
  FREE: "Free",
  PRO: "Pro",
  ENTERPRISE: "Enterprise",
};

export function PlanBadge({ plan }: PlanBadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
      {labels[plan]}
    </span>
  );
}
