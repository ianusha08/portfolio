/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'rgb(var(--bg) / <alpha-value>)',
          surface: 'rgb(var(--surface) / <alpha-value>)',
          subtle: 'rgb(var(--surface-secondary) / <alpha-value>)',
          border: 'rgb(var(--border) / <alpha-value>)',
          borderLight: 'rgb(var(--border-light) / <alpha-value>)',
          text: 'rgb(var(--text-primary) / <alpha-value>)',
          muted: 'rgb(var(--text-secondary) / <alpha-value>)',
          faint: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        accent: {
          amber: 'rgb(var(--accent-amber) / <alpha-value>)',
          amberDim: 'rgb(var(--accent-amber) / 0.12)',
          emerald: 'rgb(var(--accent-emerald) / <alpha-value>)',
          emeraldDim: 'rgb(var(--accent-emerald) / 0.12)',
          blue: 'rgb(var(--accent-blue) / <alpha-value>)',
          blueDim: 'rgb(var(--accent-blue) / 0.12)',
          purple: 'rgb(var(--accent-purple) / <alpha-value>)',
          purpleDim: 'rgb(var(--accent-purple) / 0.12)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '32px 32px',
        'grid-sm': '20px 20px',
      }
    },
  },
  plugins: [],
}
