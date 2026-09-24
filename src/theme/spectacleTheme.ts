// Slide tokens. Mirrors the site palette in src/index.css; Spectacle passes
// these into SVG attributes, so they stay as literal colour values here.
export const spectacleTheme = {
  colors: {
    primary: '#2F3437',
    secondary: '#1F3A32',
    tertiary: '#F7F6F3',
    quaternary: '#3D6B5A',
    quinary: '#6F6A62',
    muted: '#C5D4CC',
    rule: '#D8D4CC',
    ruleDark: 'rgba(197, 212, 204, 0.28)',
  },
  fonts: {
    header: '"IBM Plex Serif", Georgia, "Times New Roman", serif',
    text: '"IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"IBM Plex Mono", "SF Mono", ui-monospace, monospace',
  },
  fontSizes: {
    h1: '60px',
    h2: '42px',
    h3: '30px',
    text: '22px',
    monospace: '16px',
  },
  fontWeights: {
    header: '500',
    text: '400',
  },
  space: [12, 20, 32],
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 620,
  },
  backdropStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#E4E1DB',
  },
}
