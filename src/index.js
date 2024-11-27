import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { CartContextProvider } from "./components/Context/CartContext";
import { FormContextProvider } from "./components/Context/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <FormContextProvider>
      <CartContextProvider>
        <Main />
      </CartContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);

reportWebVitals();
