 import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./css/index.css";

ReactDOM.render(                     //ReactDOM integration:
  <React.StrictMode>
    <Provider store={store}>
      <App />                        //Virtual DOM  
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")   //REAL DOM
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
