import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = () => {
  const dispatch = useDispatch();

  // State
  const [localFormData, setLocalFormData] = useState({
    id: "",
    name: "",
    price: "",
    status: "",
    desc: "",
    image: "",
  });

  // Event Hanlders
  const handleOnChange = e => {
    let img = e.target.files;
    setLocalFormData(prevState => {
      return {
        ...prevState,
        id: uuidv4(),
        [e.target.id]: e.target.value,
        image: "/images/hali.jpg", //! TEMPORARY WORKAROUND, NEEDS TO BE FIXED
      };
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM_TO_MENU", payload: localFormData });

    setLocalFormData({
      id: "",
      name: "",
      price: "",
      status: "",
      desc: "",
      image: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fish Name"
            onChange={handleOnChange}
            value={localFormData.name}
            required
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Fish Price"
            onChange={handleOnChange}
            value={localFormData.price}
            required
          />
          <select
            name="status"
            id="status"
            onChange={handleOnChange}
            value={localFormData.status}
            required
          >
            <option value="Fresh">Fresh</option>
            <option value="SoldOut">Sold Out</option>
          </select>
        </FormGroup>
        <div className="form__textarea">
          <textarea
            name="desc"
            id="desc"
            placeholder="Fish Description"
            onChange={handleOnChange}
            value={localFormData.desc}
            required
          ></textarea>
        </div>
        <div className="fish-image__desc">
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Fish Image"
            onChange={handleOnChange}
            value={localFormData.image}
          />
        </div>
        <button type="submit">+ add item</button>
      </Form>
    </Container>
  );
};

export default AddItemForm;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  border: 2px solid #000;
`;

const Form = styled.form`
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
