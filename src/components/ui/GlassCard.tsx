import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-luxury overflow-hidden transition-all duration-500 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
