import { useState } from "react";
import styled from "styled-components";
import anchor from "../Styles/images/anchor.svg";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menuArr, setMenuArr] = useState([]);

  return (
    <Container>
      <Title>
        <h1>
          catch{" "}
          <span className="text-anchor">
            <span className="text-of">of</span>
            <img src={anchor} alt="" />
            <span className="text-the">the</span>
          </span>{" "}
          day
        </h1>
        <h3>fresh seafood market</h3>
      </Title>
      <MenuList>
        {/* {menuArr && menuArr.map(eachItem => <MenuItem eachItem={eachItem} />)} */}
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuList>
    </Container>
  );
};

export default Menu;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  overflow: auto;
  border: 3px solid #000;
  flex: 2;
  padding: 1rem;
`;

const Title = styled.div`
  font-family: "Blanch Caps Inline", sans-serif;
  font-family: "Haymaker", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span.text-anchor {
      font-size: 2rem;
      position: relative;
      display: flex;
      align-items: center;

      img {
        position: relative;
        height: 6rem;
      }

      span.text-of {
        color: hsl(158, 72%, 49%);
        font-size: 1.3rem;
        position: relative;
        left: 10%;
      }

      span.text-the {
        color: hsl(158, 72%, 49%);
        font-size: 1.3rem;
        position: relative;
        right: 10%;
      }
    }
  }

  h3 {
    font-family: "Haymaker", sans-serif;
    color: hsl(158, 72%, 49%);

    font-size: 1rem;
    display: flex;
    align-items: center;

    &::before {
      content: "═══  ";
      font-size: 1rem;
    }

    &::after {
      content: "  ═══";
      font-size: 1rem;
    }
  }
`;

const MenuList = styled.div``;
