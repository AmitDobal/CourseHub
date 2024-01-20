import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { applyMiddleware, createStore } from "redux";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";
import reducers from './module/index.js'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>
);
