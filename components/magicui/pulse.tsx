"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function Pulse({
  className,
  children,
  pulseColor = "#ffffff",
  duration = "1.5s",
  ...props
}: PulseProps) {
  return (
    <button
      className={cn(
        "relative",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
