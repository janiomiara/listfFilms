import { createGlobalStyle } from 'styled-components'

const GloblaStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html{
  font-size: 62.5%;
  }

  html, body, #__next{
  height: 100%;
  }

  body{
  font-family: -apple-system, BlinkMacSystemGont, 'Segoe UI', 
  Roboto, Oxygem, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
export default GloblaStyles
