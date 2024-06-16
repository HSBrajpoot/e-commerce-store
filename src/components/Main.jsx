"use client";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { RiRefundLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBag } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
const Main = () => {
  const [qty, setQty] = useState(1);
  const slides = [
    { url: "/product/wear1.jpg" },
    { url: "/product/wear2.jpg" },
    { url: "/product/wear3.jpg" },
    { url: "/product/wear4.jpg" },
  ];
  return (
    // <div className="p-5 w-fit h-fit border">
    <div className=" w-full h-fit p-5 tracking-wider bg-slate-100 flex flex-col md:flex-row md:gap-16">
      <div>
        <ImageSlider value={slides} />
        <div className="font-sans hidden md:flex flex-col w-[500px] tracking-wider">
          <h3 className="text-lg font-medium text-gray-700">Description:</h3>
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugiat soluta deserunt laboriosam repellendus at ratione mollitia
            suscipit ut reprehenderit aspernatur tempora eveniet ipsam, commodi
            facilis officia vel sint nihil.
          </p>
        </div>
      </div>
      <div className="pr-2 flex flex-col gap-3 md:w-1/3">
        <h5 className="font-thin text-sm py-2 tracking-wider">
          <span className="text-green-700 text-xs-sm">Mega</span>SalesPK
        </h5>
        <h2 className="text-xl font-medium pr-6">
          2-in-1 Dumpling Wrapper Mold Samosa Maker with Pastry Handle
        </h2>
        <div className="flex items-center gap-3">
          <p className=" text-xs-sm font-light line-through font-sans tracking-normal">
            Rs.1800.00 PKR
          </p>
          <p className=" text-xs-sm font-bold font-sans tracking-normal">
            Rs.1300.00 PKR
          </p>
          <div className="bg-blue-900 text-white text-sm px-3 py-1 rounded-full">
            Sale
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex text-xl">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
          </div>
          <p className="text-sm font-sans tracking-normal">17 reviews</p>
        </div>
        <div className=" flex justify-between pt-5 px-2">
          <div className="flex justify-center items-center flex-col gap-1">
            <SiCashapp className="text-4xl" />
            <p className=" tracking-normal font-sans font-semibold">
              Low Price
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-1">
            <RiRefundLine className="text-4xl" />
            <p className=" tracking-normal font-sans font-semibold">
              Easy Return
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-1">
            <LiaShippingFastSolid className="text-4xl" />
            <p className=" tracking-normal font-sans font-semibold">
              Fast Delivery
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-1 font-sans pt-3">
          <p className=" font-ligth text-sm opacity-75">Quantity</p>
          <div className="flex items-center border border-black w-fit px-4 py-2 gap-8 text-lg">
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
        </div>
        <button className="border border-black px-3 py-3 hover:border-2 text-gray-700 font-sans">
          Add to cart
        </button>
        <button className="border border-black bg-black rounded-md px-3 py-4 animate-bounce mt-1 duration-1000 flex justify-center items-center gap-3 text-white font-sans">
          <IoBag className="text-xl" />
          Buy Now Cash on Delivery
        </button>
        <div className="font-sans md:hidden">
          <h3 className="text-lg font-medium text-gray-700">Description:</h3>
          <p className="text-sm text-gray-500 tracking-wider">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugiat soluta deserunt laboriosam repellendus at ratione mollitia
            suscipit ut reprehenderit aspernatur tempora eveniet ipsam, commodi
            facilis officia vel sint nihil.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Main;
