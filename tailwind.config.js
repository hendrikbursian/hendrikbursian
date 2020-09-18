module.exports = {
  // prettier-ignore
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    typography: (theme) => ({
      resume: {
        css: {
          width: '34em',
          fontFamily: theme('fontFamily.resume-serif'),
          color: theme('colors.black'),

          p: {
            marginBottom: theme('spacing.2'),
            lineHeight: theme('leading.relaxed'),
            letterSpacing: theme('tracking.normal'),
          },
        },
      },
      xl: {
        css: {
          lineHeight: theme('lineHeight.normal'),
        },
      },
      default: {
        css: {
          // lineHeight: theme('lineHeight.snug'),
          fontFamily: theme('fontFamily.serif'),
          lineHeight: theme('lineHeight.normal'),
          // color: theme('colors.black'),
          // letterSpacing: '-0.1px',

          // p: {
          //  marginTop: theme('spacing.2'),
          //  marginBottom: theme('spacing.2'),
          // },

          // a: {
          //   color: theme('colors.link.default'),
          //   '&:hover': {
          //     color: theme('colors.link.hover'),
          //   },
          // },

          // 'ul, ol': {
          //   marginLeft: theme('spacing.3'),
          //   marginTop: theme('spacing.3'),
          //   marginBottom: theme('spacing.3'),

          //   li: {
          //     paddingLeft: theme('spacing.6'),
          //   },
          // },
        },
      },
    }),
    extend: {
      transitionDuration: {
        11111: '11111ms',
      },
      colors: {
        beige: {
          100: '#fefcf8',
          200: '#fdf9f0',
          300: '#fdf7e9',
          400: '#fcf4e1',
          500: '#fbf1da',
          600: '#c9c1ae',
          700: '#979183',
          800: '#646057',
          900: '#32302c',
        },
      },
      boxShadow: {
        button: '0 0 0 2px black',
      },

      width: {
        content: '42rem', // 3rem + 36rem + 3rem,
      },
      screens: {
        print: { raw: 'print' },
      },
      margin: {
        '1/2': '0.1rem',
      },
      padding: {
        '1/2': '0.1rem',
      },
      fontFamily: {
        serif: 'EB Garamond, serif',
        sans: 'Oswald, sans-serif',
        'resume-serif': 'Martel, serif',
        'resume-sans': 'Montserrat, sans-serif',
      },
    },
  },
  variants: {
    margin: ['last'],
    scale: ['hover', 'group-hover'],
    transitionDuration: ['hover', 'group-hover'],
  },
  plugins: [
    //
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}
