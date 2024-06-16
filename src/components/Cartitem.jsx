"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
const Cartitem = () => {
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="p-2 border-b-2 py-6">
        <div className="flex gap-12 items-center text-gray-700">
          <Image
            src={"/product/wear1.jpg"}
            width={100}
            height={100}
            className="rounded-md"
          />
          <h3 className="tracking-wider text-sm">Hair Clay Wax</h3>
        </div>
        <div className="pt-6 flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div className="flex items-center border w-fit px-2 gap-6 text-sm">
              <button
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className={`text-2xl ${
                  qty === 1 ? " opacity-50 cursor-not-allowed" : ""
                }`}
              >
                -
              </button>
              <p>{qty}</p>
              <button
                onClick={() => {
                  if (qty < 10) {
                    setQty(qty + 1);
                  }
                }}
                className={`text-2xl ${
                  qty === 10 ? " opacity-50 cursor-not-allowed" : ""
                }`}
              >
                +
              </button>
            </div>
            <RiDeleteBin5Line className="text-2xl text-gray-500 opacity-70 cursor-pointer" />
          </div>
          <p className="font-sans">RS.1300.00</p>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
