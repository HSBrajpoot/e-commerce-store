"use client";
import React, { useEffect } from "react";
import myContext from "@/context/Context";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Cartitem from "@/components/Cartitem";
const Cart = () => {
  const { route, setRoute } = useContext(myContext);
  const { cartItems, setCartItems } = useContext(myContext);
  const router = useRouter();
  useEffect(() => {
    setRoute("/Cart");
  });
  return (
    <div className="h-screen w-full py-5 relative font-mono text-gray-700 flex flex-col gap-2">
      <IoClose
        onClick={() => router.back()}
        className="text-4xl absolute right-3 top-4 cursor-pointer hover:scale-105 duration-300 ease-out"
      />
      <h1 className="text-2xl border-b text-center pb-5 font-semibold">
        Shopping Cart
      </h1>
      <div className="flex gap-2 justify-center items-center py-6 tracking-widest">
        <IoCartOutline className="text-2xl" />
        <p className="text-sm">Free Shipping On All Orders</p>
      </div>
      <div className={`${cartItems !== 0 ? "hidden" : ""}`}>
        <p className="text-sm text-center pt-5 tracking-tight">
          Your cart is currently empty
        </p>
        <div className="flex justify-center items-center p-10">
          <button
            onClick={() => router.push("/Catalog")}
            className="border w-56 py-3 bg-black text-white animate-bounce"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className={`${cartItems === 0 ? "hidden" : ""}`}>
        <div className="p-5 h-[500px] border-b-2 border-gray-300 overflow-y-scroll">
          <Cartitem />
          <Cartitem />
          <Cartitem />
        </div>
        <div className="flex flex-col py-5 px-2 gap-2 items-end">
          <p>Subtotal RS.1300.00</p>
          <p className="text-sm opacity-70">
            Taxes and shipping calculated at checkout
          </p>
          <button
            onClick={() => router.push("/Checkout")}
            className="border w-full md:w-96 rounded-md self-center py-3 bg-black text-white"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
