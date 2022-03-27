import '../styles/globals.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`

const theme = {
  colors: {
    white: "#fff",
    blue100: 'rgba(247, 250, 255, 1)',
    blue200: 'rgba(0, 141, 255, 0.12)',
    blue300: 'rgba(0, 141, 255, 0.12)',
    blue700: 'rgba(0, 141, 255, 1)',
    grey100: 'rgba(196, 196, 196, 1)',
    grey700: 'rgba(130, 132, 134, 1)',
    green700: 'rgba(18, 180, 73, 1)',
  },
  font: {
    header: "'Pacifico', cursive",
    body: "'Montserrat', sans-serif",
  },
  border: {
    radius: "8px",
    style: "1px solid rgba(0, 141, 255, 1)",
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
