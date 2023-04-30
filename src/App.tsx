import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyle from "styles/global";
import CenterPage from "components/pages/CenterPage/CenterPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="command-center-app/*" element={<CenterPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
