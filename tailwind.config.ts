import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          green: "#00C853",
          red: "#FF5252",
          blue: "#448AFF",
          gold: "#FFD740",
          orange: "#FFAB40"
        },
        bg: {
          dark: "#121212",
          card: "#1E1E1E",
          surface: "#2A2A2A"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B3FFFFFF",
          hint: "#66FFFFFF"
        },
        divider: "#33FFFFFF"
      },
      boxShadow: {
        glowGreen: "0 0 0 1px rgba(0,200,83,.22), 0 0 24px rgba(0,200,83,.12)",
        glowBlue: "0 0 0 1px rgba(68,138,255,.18), 0 0 20px rgba(68,138,255,.10)",
        glowGold: "0 0 0 1px rgba(255,215,64,.18), 0 0 20px rgba(255,215,64,.10)"
      },
      borderRadius: {
        "2xl-plus": "1.25rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1.5rem",
          xl: "2rem",
          "2xl": "2rem"
        }
      }
    }
  },
  plugins: []
};

export default config;
