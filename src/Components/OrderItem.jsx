import styled from "styled-components";

const OrderItem = ({ eachOrder }) => {
  console.log(eachOrder, "orderitem");
  return (
    <Container>
      <h4>{eachOrder.name}</h4>
      <p className="order__price">$ {eachOrder.price}</p>
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

  p.order__price {
    font-weight: 300;
    color: hsl(158, 72%, 49%);
    font-family: "Haymaker", sans-serif;
  }
`;
