import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyle from "styles/global";
import CenterPage from "components/pages/CenterPage/CenterPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CenterPage />
    </ThemeProvider>
  );
}

export default App;
