import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = variant === "secondary" ? "btn btn-secondary" : "btn";

  return <button className={`${styles} ${className}`.trim()} {...props} />;
}
