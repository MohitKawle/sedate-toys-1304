
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>


);


