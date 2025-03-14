import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 2,
  duration = 4,
  shineColor = "#A07CFE",
  className,
  style,
  ...props
}) {
  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        "--background-radial-gradient": `radial-gradient(circle, ${Array.isArray(shineColor) ? shineColor.join(",") : shineColor}, transparent)`,
        backgroundImage: "var(--background-radial-gradient)",
        backgroundSize: "400% 400%",
        backgroundPosition: "center",
        border: `${borderWidth}px solid transparent`, // Ensure there's a visible border
        boxShadow: `0 0 10px 2px ${Array.isArray(shineColor) ? shineColor[0] : shineColor}`, // Soft glow effect
        animation: "shine 6s infinite linear", // Adjust animation for movement
        ...style
      }}
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-transform",
        className
      )}
      {...props}
    />
  );
}
