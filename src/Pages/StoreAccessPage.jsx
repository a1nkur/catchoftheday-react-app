import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Inventory from "../Components/Inventory";
import Menu from "../Components/Menu";
import Order from "../Components/Order";

const StoreAccessPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Menu />
      <Order />
      <Inventory />
    </Container>
  );
};

export default StoreAccessPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  border-radius: 3px;

  height: 90vh;
  width: 95vw;
  background-color: #fff;
  border: 4px solid #000;
  padding: 0.6rem;

  display: flex;
  gap: 0.5rem;
`;
