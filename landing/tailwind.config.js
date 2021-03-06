module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    fontFamily: {
      display: 'Rubik, sans-serif',
      body: 'Rubik, sans-serif'
    },
    minWidth: {
      '64': '64px',
      '96': '96px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff'
    },
    extend: {
      scale: {
        '200': '2'
      },
      translate: {
        decorx: 'calc(-50vw + 110vh + 4rem)',
        decory: '4rem',
        decorx1: 'calc(-30vh)',
        decory1: '80vh',
        decorx2: 'calc(-50vw + 140vh + 8rem)',
        decory2: 'calc(170vh)',
      },
      zIndex: {
        '-10': '-10',
        '-12': '-12',
      },
      fontSize: {
        '7xl': '6rem',
      },
      borderWidth: {
        '10': '10px',
        '50': '50px',
        '20': '2vh'
      },
      inset: {
        '-55': '-45vw',
        '-90': '-90vw',
        '-10': '-10vw'
      },
      width: {
        card: '344px',
        '90': '90px',
        '200': '200px',
        '500': '500px',
        '1000': '1000px',
        phone: '30vh',
        browser: '30vw',
        'browser-mobile': '80vw',
        decor: '110vh',
        decor1: '120vh',
        decor2: '140vh',
      },
      height: {
        '18': '4.5rem',
        '90': '90px',
        '200': '200px',
        '500': '500px',
        '1000': '1000px',
        phone: '30vh',
        decor: '110vh',
        decor1: '120vh',
        decor2: '140vh',
      },
      opacity: {
        '12': '.12',
        '38': '.38',
        '60': '.60',
        '87': '.87',
      },
      colors: {
        primary: '#1E3250',
        red: {
          default: '#CE6564',
          'light': '#F59297'
        },
        orange: {
          default: '#F47F5F',
          other: '#FABD84',
          'light': '#FCC9B3'
        },
        green: {
          default: '#6D995C',
          'light': '#7FC78C'
        },
        cyan: {
          default: '#459789',
          'light': '#8FD1C1'
        },
        teal: {
          default: '#51797D',
          'light': '#9EC7D0'
        },
        purple: {
          default: '#845578',
          'light': '#978AA4'
        },
      },
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    columnGap: ['responsive'],
    rowGap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-elevation')(['responsive', 'hover', 'focus', 'active']),
  ],
}