import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import StoreAccessPage from "./Pages/StoreAccessPage";

import { Route, Switch } from "react-router-dom";
import StorePickerPage from "./Pages/StorePickerPage";
import ErrorPage404 from "./Components/ErrorPage404";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <StorePickerPage />
        </Route>
        <Route path="/store/:id">
          <StoreAccessPage />
        </Route>
        <Route>
          <ErrorPage404 />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(226, 94%, 94%);

  display: flex;
  align-items: center;
  justify-content: center;
`;
