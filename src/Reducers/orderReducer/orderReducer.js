const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ORDER":
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default orderReducer;
