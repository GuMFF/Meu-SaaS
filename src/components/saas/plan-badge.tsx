type PlanBadgeProps = {
  plan: "FREE" | "PRO" | "ENTERPRISE";
};

const labels: Record<PlanBadgeProps["plan"], string> = {
  FREE: "Free",
  PRO: "Pro",
  ENTERPRISE: "Enterprise",
};

export function PlanBadge({ plan }: PlanBadgeProps) {
  return <span className="badge">{labels[plan]}</span>;
}
