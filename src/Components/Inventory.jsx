import styled from "styled-components";
import AddItemForm from "./AddItemForm";

const Inventory = () => {
  return (
    <Container>
      <h2>Inventory</h2>
      <AddItemForm />
      
    </Container>
  );
};

export default Inventory;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  border: 3px solid #000;
  flex: 2;
  padding: 1rem;

  h2 {
    text-align: center;
    font-family: "Haymaker", sans-serif;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;
