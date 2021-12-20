import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import {createStore , applyMiddleware , compose  } from "redux";
import thunk from "resux-thunk";
import App from "./App";

import reducers from "./reducers/index.js";

const store = createStore(reducers , compose(applyMiddleware(thunk)));




ReactDOM.render(<App/> , document.getElementById("root"));