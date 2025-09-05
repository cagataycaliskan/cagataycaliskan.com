import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafcff',
          100: '#f2f7ff', 
          200: '#e1edff',
          300: '#c7dcff',
          400: '#93c0ff',
          500: '#5fa3ff',
          600: '#2e7df6',
          700: '#1d5bd9',
          800: '#1a4bb8',
          900: '#1a3d96',
          950: '#142a5e',
        },
        dark: {
          bg: '#0a0e1a',
          secondary: '#1c202e',
          tertiary: '#2a2f42',
          glass: 'rgba(28, 32, 46, 0.7)',
        },
        light: {
          bg: '#f8f9fa',
          secondary: '#ffffff',
          tertiary: '#e9ecef',
        },
        accent: {
          blue: '#0ea5e9',
          darkblue: '#0284c7', 
          cyan: '#06b6d4',
          red: '#dc2626',
          orange: '#ea580c',
          yellow: '#ca8a04',
          green: '#16a34a',
          teal: '#0891b2',
          lightblue: '#38bdf8',
          navy: '#1e40af',
        },
        // Centralized Brand Colors - Clean Blue Tech Palette (NO PURPLE)
        brand: {
          primary: '#0ea5e9',     // sky-500 - Modern blue
          secondary: '#0284c7',   // sky-600 - Darker blue
          tertiary: '#06b6d4',    // cyan-500 - Tech cyan
          gradient: {
            primary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #06b6d4 100%)',
            blue: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
            cyan: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
            success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          }
        },
        // Status Colors
        status: {
          success: '#10b981',     // green-500
          warning: '#f59e0b',     // amber-500
          error: '#ef4444',       // red-500
          info: '#3b82f6',        // blue-500
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #06b6d4 100%)",
        "gradient-secondary": "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
        "gradient-blue": "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        "gradient-success": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "gradient-warning": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        "gradient-hover": "linear-gradient(135deg, #0891b2 0%, #16a34a 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, hsla(200,100%,60%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(190,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(180,100%,70%,0.2) 0px, transparent 50%)",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif'],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-teal': '0 0 20px rgba(8, 145, 178, 0.4)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
