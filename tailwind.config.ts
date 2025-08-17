import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "code-typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "neural-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "circuit-flow": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        hologram: {
          "0%, 100%": { opacity: "0.8", transform: "translateY(0px)" },
          "50%": { opacity: "1", transform: "translateY(-5px)" },
        },
        "data-stream": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "float-tech": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(5deg)" },
        },
      },
      animation: {
        "matrix-rain": "matrix-rain 3s linear infinite",
        "code-typing": "code-typing 2s ease-in-out infinite alternate",
        "neural-pulse": "neural-pulse 2s ease-in-out infinite",
        "circuit-flow": "circuit-flow 3s ease-in-out infinite",
        hologram: "hologram 3s ease-in-out infinite",
        "data-stream": "data-stream 2s linear infinite",
        "terminal-blink": "terminal-blink 1s infinite",
        glitch: "glitch 0.3s ease-in-out infinite",
        "scan-line": "scan-line 2s linear infinite",
        "float-tech": "float-tech 6s ease-in-out infinite",
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
        "neural-network":
          "radial-gradient(circle at 25% 25%, rgba(0, 255, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
        "circuit-pattern":
          'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10h80v80h-80z" fill="none" stroke="%2300ff00" stroke-width="0.5" opacity="0.3"/></svg>\')',
      },
      fontFamily: {
        mono: ["Courier New", "Monaco", "Menlo", "Consolas", "monospace"],
        tech: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
