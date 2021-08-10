import styled from "styled-components";
import zen from "../Assets/images/zen.jpg";

const MenuItem = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={zen} alt="menu-item" />
      </ImageContainer>
      <ItemDetail>
        <div className="part__one">
          <h3>Atlantic Salmon</h3>
          <span>$14.53</span>
        </div>
        <div className="part__two">
          <p>
            This flaky, oily salmon is truly the king of the sea. Bake it, grill
            it, broil it...as good as it gets!
          </p>
        </div>
        <button>add to order</button>
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
  .part__one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Haymaker", sans-serif;

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
