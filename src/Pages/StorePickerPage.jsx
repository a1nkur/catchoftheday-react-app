import { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSlug } from "random-word-slugs";
import { slugifyText } from "../Helpers/Helpers";

import { useHistory } from "react-router-dom";

const StorePickerPage = () => {
  const history = useHistory();

  //* State
  const [localdata, setLocalData] = useState("");

  useEffect(() => {
    const slug = generateSlug();
    setLocalData(slug);
  }, []);

  //* Event Handlers
  const handleOnSubmit = e => {
    e.preventDefault();

    history.push(`/store/${localdata}`);
  };

  const handleOnChange = e => {
    let formattedText = slugifyText(e.target.value);
    setLocalData(formattedText);
  };

  return (
    <Container>
      <Heading>
        <h2>
          enter <span>store</span> name
        </h2>
      </Heading>
      <Body>
        <form onSubmit={handleOnSubmit}>
          <input type="text" value={localdata} onChange={handleOnChange} />
          <button type="submit">visit store</button>
        </form>
      </Body>
    </Container>
  );
};

export default StorePickerPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 40vh;
  width: 30vw;
  background-color: #fff;
  border: 4px solid #000;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-family: "Haymaker", sans-serif;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 2rem;

  span {
    color: hsl(158, 72%, 49%);
  }
`;

const Body = styled.div`
  border: 1px solid #ccc;

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 0.7rem 0.5rem;
      border: none;
      border-bottom: 1px solid #ccc;
      font-size: 1.4rem;
      text-align: center;
    }

    button {
      width: 100%;
      padding: 0.4rem;
      border: none;
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
  }
`;
