import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const rootElement = document.getElementById("root");
const store = createStore(reducers, applyMiddleware(thunk));
//console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
