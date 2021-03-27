const purpleColors = {
  purple0: '#8a05be',
  purple1: '#9824c7',
  purple2: '#8807bc',
  purple3: '#543b6c',
  purpleStatusBar: '#66048d',
} as const;

const textColors = {
  white: '#fff',
} as const;

const theme = {
  colors: {
    purpleColors,
    textColors,
  },
} as const;

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
