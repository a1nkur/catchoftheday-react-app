import { useState } from "react";
import styled from "styled-components";

import OrderItem from "./OrderItem";

const Order = () => {
  const [orderList, setOrderList] = useState([]);

  return (
    <Container>
      <h2>Your Order</h2>
      {/* {orderList && orderList.map(eachItem => <OrderItem eachItem={eachItem} />)} */}
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />

      <OrderTotal>
        <h5>Total</h5>
        <p>$ 0.00</p>
      </OrderTotal>
    </Container>
  );
};

export default Order;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  overflow: auto;
  border: 3px solid #000;
  flex: 1.5;
  padding: 1rem;

  h2 {
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-family: "Haymaker", sans-serif;
  }
`;

const OrderTotal = styled.div`
  padding: 1rem 0;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
