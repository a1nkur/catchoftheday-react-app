import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Importing Fonts
// import "./Styles/fonts/blanch_caps_inline-webfont.ttf";
// import "./Styles/fonts/haymaker-webfont.ttf";

import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";

import { allReducers } from "./Reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
