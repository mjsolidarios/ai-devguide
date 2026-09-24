// Slide tokens. Hex equivalents of the Cobalt tokens in src/tokens.css; Spectacle passes
// these into SVG attributes, so they stay as literal colour values here.
export const spectacleTheme = {
  colors: {
    primary: '#323841',
    secondary: '#161B22',
    tertiary: '#F8FAFD',
    quaternary: '#0076ED',
    quinary: '#5E646D',
    muted: '#A5ABB4',
    rule: '#DEE2E7',
    ruleDark: '#373D48',
  },
  fonts: {
    header: '"Space Grotesk", "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
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
    header: '600',
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
    backgroundColor: '#E4E8ED',
  },
}
