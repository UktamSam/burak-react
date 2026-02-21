 import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";

const container = document.getElementById('root')!;   //REAL DOM
const root = createRoot(container);

//GLOBAL INTEGRATIONS => REDUX | MUI | ROUTER | CONTEXT | SocketIO
//Loyihani xoxlagan joyida ishlatamiz

root.render(                     //ReactDOM integration:
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <App />                       {/*Virtual DOM*/} 
        </Router>
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //tezlikni o'lchash uchun ishlatiladi( Lekin browserda o'lchash yaxshiroq)
