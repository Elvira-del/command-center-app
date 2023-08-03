import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import { Issue } from "data";
import { theme } from "styles/theme";
import GlobalStyle from "styles/global";
import Layout from "components/templates/Layout";
import CenterPage from "components/pages/CenterPage";
import NotFoundPage from "components/pages/NotFoundPage";

type IssuesContextType = {
  issues: Issue[];
  setIssues: (value: Issue[] | ((v: Issue[]) => Issue[])) => void | null;
};

export const IssueContext = createContext<IssuesContextType>({
  issues: [],
  setIssues: () => void {},
});

function App() {
  const [issues, setIssues] = useState<Issue[]>(
    getLocalStorage("localIssues") || []
  );

  useEffect(() => {
    setLocalStorage("localIssues", issues);
  }, [issues]);

  return (
    <IssueContext.Provider value={{ issues, setIssues }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="command-center-app/*" element={<Layout />}>
            <Route index element={<CenterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </IssueContext.Provider>
  );
}

export default App;
