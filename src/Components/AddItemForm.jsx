import { useState } from "react";
import styled from "styled-components";

const AddItemForm = () => {
  // State
  const [localFormData, setLocalFormData] = useState({
    fishName: "",
    fishPrice: "",
    fishStatus: "Fresh",
    fishDesc: "",
    fishImageDesc: "",
  });

  // Event Hanlders
  const handleOnChange = e => {
    setLocalFormData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleOnClick = e => {
    return;
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <input
            type="text"
            name="fishName"
            id="fishName"
            placeholder="Fish Name"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="fishPrice"
            id="fishPrice"
            placeholder="Fish Price"
            onChange={handleOnChange}
          />
          <select name="status" id="fishStatus" onChange={handleOnChange}>
            <option value="Fresh">Fresh</option>
            <option value="Sold Out">Sold Out</option>
          </select>
        </FormGroup>
        <div className="form__textarea">
          <textarea
            name="fishDesc"
            id="fishDesc"
            placeholder="Fish Description"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="fish-image__desc">
          <input
            type="text"
            name="fishImageDesc"
            id="fishImageDesc"
            placeholder="Fish Image"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" onClick={handleOnClick}>
          + add item
        </button>
      </Form>
    </Container>
  );
};

export default AddItemForm;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  border: 2px solid #000;
`;

const Form = styled.div`
  input:focus,
  select:focus,
  textarea:focus {
    /* border: 1px solid #ccc; */
    outline: none;
  }

  .form__textarea textarea {
    width: 100%;
    height: 3.5rem;
    border: none;
    padding: 0.5rem;

    border-bottom: 1px solid #ccc;
  }

  .fish-image__desc input {
    width: 100%;
    padding: 1rem 0;
    border: none;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  button {
    width: 100%;
    padding: 0.2rem 0;
    border: 0.1rem solid #000;
    border: none;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #000;
      color: #fff;
      border: none;
      outline: none;
    }
  }
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;

  input,
  select {
    flex-grow: 1;
    padding: 0.5rem;
    border: none;
  }

  input {
    border-right: 1px solid #ccc;
  }
`;
