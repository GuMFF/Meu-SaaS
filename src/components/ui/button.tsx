import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50";

  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors disabled:opacity-50 ${styles} ${className}`}
      {...props}
    />
  );
}
