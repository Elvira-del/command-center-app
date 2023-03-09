import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyle from "styles/global";
import CenterPage from "components/pages/MainPanel/MainPanel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CenterPage />
    </ThemeProvider>
  );
}

export default App;
