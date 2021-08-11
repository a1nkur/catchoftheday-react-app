import styled from "styled-components";

const ErrorPage404 = () => {
  return (
    <Container>
      <h1>
        {" "}
        <span>404</span> Page Not Found.
      </h1>
    </Container>
  );
};

export default ErrorPage404;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  font-family: "Haymaker", sans-serif;
  font-size: 3rem;

  span {
    color: hsl(5, 81%, 56%);
    animation: color-change 1.5s infinite;

    @keyframes color-change {
      0% {
        color: hsl(5, 81%, 56%);
      }
      50% {
        color: #000;
      }
      100% {
        color: hsl(5, 81%, 56%);
      }
    }
  }
`;
