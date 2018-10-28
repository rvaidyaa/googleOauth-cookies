import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import 'materialize-css/dist/css/materialize.min.css'
// since no relative path specified for materialze css ./ it assumes its a npm module
import reduxThunk from 'redux-thunk';
import App from "./components/App";
import reducers from "./reducers";


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// createStore(reducers,initial state, middlewarestack)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
