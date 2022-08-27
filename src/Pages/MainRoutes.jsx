
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import { Hotels } from "../Components/Hotels";
import SinglePage from "../Components/Thingd_to_do/SinglePage";
import Things from "../Components/Thingd_to_do/Things";
import { Restaurants } from "../Components/Restaurants";
import Basket from "./Basket";
import {CheckoutPage} from "../Components/Aditya/Checkout_page";
import {PaymentPage} from "../Components/Aditya/Payment_page";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/places/:id" element={<SinglePage />} />
        <Route path="/things" element={<Things />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};


export default MainRoutes;
