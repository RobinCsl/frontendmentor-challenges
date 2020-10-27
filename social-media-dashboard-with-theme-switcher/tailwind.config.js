const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    // for tailwind UI users only
    // other plugins here
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ], 
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram": "linear-gradient(90deg, hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
        "youtube": "hsl(348, 97%, 39%)",
        "toggle": "var(--color-bg-toggle)",
        "background": "var(--background)",
        "top-background-pattern": "var(--top-background-pattern)",
        "card-background": "var(--card-background)",
        "card-background-hover": "var(--card-background-hover)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",

      }
    },
  },
  variants: {
    boxShadow: ({after}) => after(['active', 'group-hover', 'group-focus']),
  },
  plugins: [],
}
