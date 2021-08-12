import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import OrderItem from "./OrderItem";

const Order = () => {
  const orderData = useSelector(state => state.orderData); // [{…}]

  return (
    <Container>
      <h2>Your Order</h2>
      {orderData &&
        orderData.map(eachOrder => <OrderItem eachOrder={eachOrder} />)}

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
