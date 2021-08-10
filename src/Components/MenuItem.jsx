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

  display: flex;
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
  }

  .part__two {
    p {
      font-size: 0.9rem;
      padding: 0.7rem 0;
    }
  }

  button {
    width: 40%;
    padding: 0.4rem 0;
    border: 0.1rem solid #000;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #000;
      color: #fff;
      border: none;
    }
  }
`;
