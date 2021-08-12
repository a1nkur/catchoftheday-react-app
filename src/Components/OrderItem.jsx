import styled from "styled-components";

const OrderItem = ({ eachOrder }) => {
  console.log(eachOrder, "orderitem");
  return (
    <Container>
      <h4>{eachOrder.name}</h4>
      <p>$ {eachOrder.price}</p>
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
