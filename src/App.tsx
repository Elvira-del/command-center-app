import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Issue } from "data";
import useLocalStorage from "hooks/useLocalStorage";
import { theme } from "styles/theme";
import GlobalStyle from "styles/global";
import Layout from "components/templates/Layout";
import CenterPage from "components/pages/CenterPage";
import FormPage from "components/pages/FormPage";
import NotFoundPage from "components/pages/NotFoundPage";

type IssuesContextType = {
  issues: Issue[];
  setIssues: (value: Issue[] | ((v: Issue[]) => Issue[])) => void | null;
};

export const IssueContext = createContext<IssuesContextType>({
  issues: [],
  setIssues: () => {},
});

function App() {
  const [issues, setIssues] = useLocalStorage<Issue[]>("localIssues", []);

  return (
    <IssueContext.Provider value={{ issues, setIssues }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="command-center-app/*" element={<Layout />}>
            <Route index element={<CenterPage />} />
            <Route path="issue-form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </IssueContext.Provider>
  );
}

export default App;
