"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const WarpBackground = ({
  children,
  perspective = 100,
  className,
  gridColor = "rgba(255, 255, 255, 0.3)", // More visible default color
  beamSize = 5,
  ...props
}) => {
  return (
    <div className={cn("relative rounded", className)} {...props}>
      <div
        style={{
          "--perspective": `${perspective}px`,
          "--grid-color": gridColor,
          "--beam-size": `${beamSize}%`,
        }}
        className={
          "pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d] bg-black"
        }
      >
        {/* top side */}
        <div className="absolute [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:200cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100%]"></div>
        {/* bottom side */}
        <div className="absolute bottom-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:200cqmax] [transform-origin:50%_100%] [transform:rotateX(90deg)] [width:100%]"></div>
        {/* left side */}
        <div className="absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:200cqmax] [transform-origin:0%_50%] [transform:rotateY(90deg)] [width:100%]"></div>
        {/* right side */}
        <div className="absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:200cqmax] [width:100%] [transform-origin:100%_50%] [transform:rotateY(-90deg)]"></div>
        {/* Back wall */}
        <div className="absolute left-0 top-0 h-full w-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_2px,_transparent_2px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform:translateZ(-100cqmax)]"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
