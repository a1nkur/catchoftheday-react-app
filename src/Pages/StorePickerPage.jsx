import styled from "styled-components";

const StorePickerPage = () => {
  // Event Handlers
  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Heading>
        <h2>enter store name</h2>
        <span>or</span>
        <h2>choose generated name</h2>
      </Heading>
      <Body>
        <form onSubmit={handleOnSubmit}>
          <input type="text" />
          <button type="button">visit store</button>
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
  padding: 0.6rem;
`;

const Heading = styled.div`
  font-family: "Haymaker", sans-serif;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 2rem;
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
    }

    button {
      width: 100%;
      padding: 0.4rem;
      /* border: 0.1rem solid #000; */
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
