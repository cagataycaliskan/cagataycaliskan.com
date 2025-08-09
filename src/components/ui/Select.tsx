"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "default" | "lg";
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ 
    options, 
    value, 
    onValueChange, 
    placeholder = "Select option...", 
    className, 
    disabled = false,
    size = "default",
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
      options.find(option => option.value === value) || null
    );
    const selectRef = useRef<HTMLDivElement>(null);

    const sizeClasses = {
      sm: "h-8 px-2 text-sm",
      default: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      const option = options.find(option => option.value === value);
      setSelectedOption(option || null);
    }, [value, options]);

    const handleSelect = (option: SelectOption) => {
      setSelectedOption(option);
      onValueChange(option.value);
      setIsOpen(false);
    };

    return (
      <div ref={selectRef} className={cn("relative", className)} {...props}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "w-full flex items-center justify-between rounded-lg border transition-all duration-200",
            "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
            "border-gray-200 dark:border-gray-700 shadow-sm",
            "hover:bg-white dark:hover:bg-gray-800",
            "hover:border-gray-300 dark:hover:border-gray-600",
            "hover:shadow-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "group",
            {
              "ring-2 ring-blue-500/20 border-blue-500 shadow-md": isOpen,
            },
            sizeClasses[size]
          )}
        >
          <div className="flex items-center gap-2 flex-1 text-left">
            {selectedOption?.icon && (
              <div className="flex-shrink-0">{selectedOption.icon}</div>
            )}
            <span className={cn(
              selectedOption 
                ? "text-gray-900 dark:text-gray-100" 
                : "text-gray-500 dark:text-gray-400"
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
          
          <svg
            className={cn(
              "w-4 h-4 transition-all duration-300 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300",
              { 
                "rotate-180 text-blue-500": isOpen,
                "group-hover:scale-110": !isOpen
              }
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m19 9-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div 
            className={cn(
              "absolute top-full left-0 right-0 mt-2 z-50",
              "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50",
              "shadow-2xl ring-1 ring-black/5 dark:ring-white/10",
              "animate-in slide-in-from-top-2 duration-200 ease-out"
            )}
            style={{
              animation: isOpen ? 'slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'slideUp 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <div className="p-1 max-h-60 overflow-auto">
              {options.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-2 text-left rounded-lg transition-all duration-200",
                    "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    "group relative overflow-hidden",
                    {
                      "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30": 
                        option.value === selectedOption?.value,
                      "text-gray-700 dark:text-gray-200": option.value !== selectedOption?.value,
                    }
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  
                  {option.icon && (
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {option.label}
                    </div>
                  </div>
                  {option.value === selectedOption?.value && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };