import menuReducer from "./menuReducer/menuReducer";
import orderReducer from "./orderReducer/orderReducer";
import sampleReducer from "./sampleReducer/sampleReducer";

import { combineReducers } from "redux";

export const allReducers = combineReducers({
  menuData: menuReducer,
  orderData: orderReducer,
  sampleData: sampleReducer,
});
