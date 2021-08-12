import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const MenuItem = ({ eachItem }) => {
  const dispatch = useDispatch();

  //* Event Handlers
  const handleClick = object => {
    dispatch({ type: "ADD_TO_ORDER", payload: object });
  };

  return (
    <Container>
      <ImageContainer>
        <img src={eachItem.image} alt="menu-item" />
      </ImageContainer>
      <ItemDetail>
        <div className="part__one">
          <h3>{eachItem.name}</h3>
          <span>$ {eachItem.price}</span>
        </div>
        <div className="part__two">
          <p>{eachItem.desc}</p>
        </div>
        <button onClick={() => handleClick(eachItem)}>add to order</button>
      </ItemDetail>
    </Container>
  );
};

export default MenuItem;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  height: 12rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  img {
    width: 11rem;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .part__one {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Haymaker", sans-serif;
    width: 100%;

    h3 {
      font-size: 1.2rem;
    }

    span {
      font-weight: 700;
      color: hsl(158, 72%, 49%);
    }
  }

  .part__two {
    p {
      font-size: 0.9rem;
      padding: 0.7rem 0;
    }
  }

  button {
    width: 60%;
    padding: 0.4rem;
    border: 0.1rem solid #000;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
