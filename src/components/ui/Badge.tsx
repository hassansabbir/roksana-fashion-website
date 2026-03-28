import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
}

export const Badge = ({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) => {
  const variants = {
    primary: "bg-luxury-pink text-white",
    secondary: "bg-luxury-soft text-luxury-pink",
    outline: "border border-luxury-pink text-luxury-pink",
    gold: "bg-luxury-gold text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
