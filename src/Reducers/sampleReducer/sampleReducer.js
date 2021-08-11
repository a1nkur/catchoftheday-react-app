import sampleData from "../../Assets/SampleData/sampleFishes";

const initialState = [];

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_SAMPLE_DATA":
      return [...sampleData];

    default:
      return state;
  }
};

export default sampleReducer;
