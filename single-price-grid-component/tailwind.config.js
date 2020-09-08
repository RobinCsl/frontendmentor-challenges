module.exports = {
  purge: ['./index.html'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        cyan_light: 'hsl(179, 47%, 52%)',
        bright_yellow: 'hsl(71, 73%, 54%)',
        light_gray: 'hsl(204, 43%, 93%)',
        grayish_blue: 'hsl(218, 22%, 67%)',
      }
    },
  },
  variants: {},
  plugins: [],
}
