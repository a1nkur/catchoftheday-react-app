const initialState = [];

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_MENU":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default menuReducer;
