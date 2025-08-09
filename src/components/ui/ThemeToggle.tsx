"use client";

import React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "ghost" | "outline";
}

export function ThemeToggle({ 
  className, 
  size = "icon", 
  variant = "ghost" 
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        "relative transition-all duration-300 hover:scale-110",
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <svg
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-500",
            resolvedTheme === "light" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-90 scale-0"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="5" />
          <path d="m12 1-1 3-1-3" />
          <path d="m12 23-1-3-1 3" />
          <path d="m20.2 20.2-2.1-2.1-2.1 2.1" />
          <path d="m3.8 3.8 2.1 2.1-2.1-2.1" />
          <path d="m1 12 3-1-3-1" />
          <path d="m23 12-3 1 3 1" />
          <path d="m20.2 3.8-2.1 2.1 2.1-2.1" />
          <path d="m3.8 20.2 2.1-2.1-2.1 2.1" />
        </svg>

        {/* Moon icon */}
        <svg
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-500",
            resolvedTheme === "dark" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-0"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleAdvanced({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="sm"
        onClick={() => setTheme("light")}
        className="px-3 py-1.5"
      >
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="5" />
          <path d="m12 1-1 3-1-3m0 16-1 3-1-3m8.2-8.2-2.1-2.1-2.1 2.1M5.6 5.6l2.1 2.1L5.6 5.6M1 12l3-1-3-1m16 0 3 1-3 1m-8.2 8.2-2.1-2.1 2.1 2.1m8.4-16.4-2.1 2.1 2.1-2.1" />
        </svg>
        Light
      </Button>
      
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="sm"
        onClick={() => setTheme("dark")}
        className="px-3 py-1.5"
      >
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        Dark
      </Button>
      
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="sm"
        onClick={() => setTheme("system")}
        className="px-3 py-1.5"
      >
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        System
      </Button>
    </div>
  );
}