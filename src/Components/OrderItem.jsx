import styled from "styled-components";

const OrderItem = props => {
  return (
    <Container>
      <h4>Item-1</h4>
      <p>$17.24</p>
    </Container>
  );
};

export default OrderItem;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
