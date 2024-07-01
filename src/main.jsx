import { ThemeProvider } from "styled-components"
import ReactDOM from "react-dom/client"
import React from "react"

import GlobalStyles from "./styles/global"
import { Home } from "./Pages/Home"
import theme from "./styles/theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
