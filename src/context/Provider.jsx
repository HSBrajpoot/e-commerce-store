"use client";
import React, { useState } from "react";
import MyContext from "./Context";
const MyContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [cartItems, setCartItems] = useState(1);
  const [route, setRoute] = useState("/");
  const [cart, setCart] = useState(false);
  const [auth, setAuth] = useState(false);
  return (
    <MyContext.Provider
      value={{ menu, setMenu, cartItems, setCartItems, route, setRoute }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
