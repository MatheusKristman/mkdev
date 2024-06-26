/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/hero-mobile.png')",
        "hero-tablet": "url('/images/hero-tablet.png')",
        "hero-desktop": "url('/images/hero-desktop.png')",
        "projects-section-mobile": "url('/images/projects-section-mobile.png')",
        "projects-section-tablet": "url('/images/projects-section-tablet.png')",
        "projects-section-desktop":
          "url('/images/projects-section-desktop.png')",
        "testimonials-section-mobile":
          "url('/images/testimonials-section-mobile.png')",
        "testimonials-section-tablet":
          "url('/images/testimonials-section-tablet.png')",
        "testimonials-section-desktop":
          "url('/images/testimonials-section-desktop.png')",
        "testimonial-mobile": "url('/images/testimonial-bg-mobile.png')",
        "testimonial-tablet": "url('/images/testimonial-bg-tablet.png')",
        "testimonial-desktop": "url('/images/testimonial-bg-desktop.png')",
        "cta-top-left-illustration":
          "url('/images/cta-top-left-illustration.png')",
        "cta-bottom-right-illustration":
          "url('/images/cta-bottom-right-illustration.png')",
        "services-desktop": "url('/images/services-desktop.png')",
        "services-tablet": "url('/images/services-tablet.png')",
        "services-mobile": "url('/images/services-mobile.png')",
        "projects-desktop": "url('/images/projects-desktop.png')",
        "projects-tablet": "url('/images/projects-tablet.png')",
        "projects-mobile": "url('/images/projects-mobile.png')",
        "ad-desktop-top": "url('/images/ad-desktop-top.png')",
        "ad-tablet-top": "url('/images/ad-tablet-top.png')",
        "ad-mobile-top": "url('/images/ad-mobile-top.png')",
        "ad-desktop-bottom": "url('/images/ad-desktop-bottom.png')",
        "ad-tablet-bottom": "url('/images/ad-tablet-bottom.png')",
        "ad-mobile-bottom": "url('/images/ad-mobile-bottom.png')",
        "about-card-pen": "url('/images/about-card-pen.svg')",
        "about-card-search": "url('/images/about-card-search.svg')",
        "about-card-gear": "url('/images/about-card-gear.svg')",
      },
      colors: {
        "gray-primary": "#0C1017",
        "light-primary": "#CCDAE7",
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
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
