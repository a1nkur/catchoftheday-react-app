import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import StoreAccessPage from "./Pages/StoreAccessPage";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <StoreAccessPage />
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
