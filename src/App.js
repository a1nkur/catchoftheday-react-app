import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import StoreAccessPage from "./Pages/StoreAccessPage";

import { Route, Switch } from "react-router-dom";
import StorePickerPage from "./Pages/StorePickerPage";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <StorePickerPage />
        </Route>
        <Route path="/:id">
          <StoreAccessPage />
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
