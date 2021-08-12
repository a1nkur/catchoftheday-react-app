import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import { useDispatch } from "react-redux";

const Inventory = () => {
  const dispatch = useDispatch();

  //* Event Handlers
  const handleClick = () => {
    dispatch({ type: "LOAD_SAMPLE_DATA" });
  };

  return (
    <Container>
      <h2>Inventory</h2>
      <AddItemForm />
      <button className="load__sameple-data" onClick={handleClick}>
        load sample data
      </button>
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

  button.load__sameple-data {
    margin-top: 2rem;
    width: 100%;
    padding: 0.4rem 0;
    border: 0.1rem solid #000;
    /* border: none; */
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #000;
      color: #fff;
      border: none;
      outline: none;
    }
  }
`;
