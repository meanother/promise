import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducersCombaine";

const store = createStore(
  rootReducer,
  // compose(
    applyMiddleware(logger, thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

