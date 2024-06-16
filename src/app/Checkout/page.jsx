"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import myContext from "@/context/Context";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const { route, setRoute } = useContext(myContext);
  const { cartItems } = useContext(myContext);
  const [emailCheck, setEmailCheck] = useState(false);
  const [saveCheck, setSaveCheck] = useState(false);

  useEffect(() => {
    setRoute("/Checkout");
  });
  return (
    <>
      <div className="p-5 font-sans text-gray-700">
        <div className="flex justify-between items-center border-b-2 py-2">
          <div
            onClick={() => router.push("/")}
            className="text-xl sm:text-3xl hover:cursor-pointer font-bold text-green-700"
          >
            IKhan<span className="text-black">Bazaar</span>
          </div>
          <Link
            href={"/Cart"}
            className="relative py-1 px-2 hover:cursor-pointer transition-transform hover:opacity-80 hover:scale-105"
          >
            <IoCartOutline className="text-3xl" />
          </Link>
        </div>
        <div className="flex flex-col gap-3 p-2 py-5 border-b-8 ">
          <h3 className="text-2xl font-bold">Contact</h3>
          <input
            type="text"
            placeholder="Email or mobile phone number"
            className="border focus:outline-none appearance-none h-10 rounded-md focus:border-green-800 px-3"
          />
          <div className="flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank
              onClick={() => setEmailCheck(true)}
              className={`text-2xl text-gray-400 cursor-pointer ${
                emailCheck ? "hidden" : ""
              }`}
            />
            <MdOutlineCheckBox
              onClick={() => setEmailCheck(false)}
              className={`text-2xl text-green-800 cursor-pointer ${
                emailCheck ? "" : "hidden"
              }`}
            />
            <p className="text-sm">Email me with news and offers</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-2 py-5 border-b-8 ">
          <h3 className="text-2xl font-bold">Delivery</h3>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">Country/Region</p>
            <input
              type="text"
              value={"Pakistan"}
              placeholder="Pakistan"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">First Name</p>
            <input
              type="text"
              placeholder="First name"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">Last Name</p>
            <input
              type="text"
              placeholder="Last name"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">Address</p>
            <input
              type="text"
              placeholder="Complete Address House #, Street #, Area, Landmark & City"
              className="border focus:outline-none w-full appearance-none text-sm h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">City</p>
            <input
              type="text"
              placeholder="City"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">Postal code</p>
            <input
              type="text"
              placeholder="Postal code"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1 py-3">
            <p className="text-xs-sm text-gray-500">Phone</p>
            <input
              type="text"
              placeholder="Phone"
              className="border focus:outline-none w-full appearance-none h-12 rounded-md focus:border-green-800 px-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank
              onClick={() => setSaveCheck(true)}
              className={`text-2xl text-gray-400 cursor-pointer ${
                saveCheck ? "hidden" : ""
              }`}
            />
            <MdOutlineCheckBox
              onClick={() => setSaveCheck(false)}
              className={`text-2xl text-green-800 cursor-pointer ${
                saveCheck ? "" : "hidden"
              }`}
            />

            <p className="text-sm">Save this information for next time</p>
          </div>
          <div className="py-3 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Shipping method</h3>
            <div className="w-full flex border justify-between items-center px-4 py-4 rounded-md border-green-800 bg-green-100">
              <p>Free Shipping</p>
              <p className="text-black font-bold">Free</p>
            </div>
          </div>
          <h3 className="text-xl font-bold">Payment</h3>
          <div className="flex flex-col gap-1">
            <p className="text-xs-sm text-gray-500">
              All transactions are secure and encrypted.
            </p>
            <div className="w-full flex border justify-between items-center px-4 py-4 rounded-md border-green-800 bg-green-100">
              <p>Cash on Delivery (COD)</p>
              <p className="text-black font-bold">Only</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-2 py-5 border-b-8 ">
          <h3 className="text-2xl font-bold">Order summary</h3>
          <div className="flex justify-between items-center text-sm">
            <p>Subtotal</p>
            <p className="text-black font-bold">Rs 1300.00</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p>Shipping</p>
            <p className="text-black font-bold">FREE</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black font-bold">Total</p>
            <p className="text-black font-bold">
              <span className="text-gray-500 text-xs-sm font-medium px-2">
                PKR{" "}
              </span>
              Rs 1300.00
            </p>
          </div>
          <button
            onClick={() => router.push("/Catalog")}
            className="border w-full md:w-96 self-center py-4 font-bold hover:scale-105 transition-transform rounded-md bg-blue-500 text-white"
          >
            Complete order
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
