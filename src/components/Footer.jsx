"use client";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import myContext from "@/context/Context";
const Footer = () => {
  const { route, setRoute } = useContext(myContext);
  return (
    <div
      className={`w-full pt-20 md:px-16 h-fit border-y md:flex-row md:gap-20 p-5 font-sans flex flex-col gap-8 ${
        route === "/" || route === "/Catalog" || route === "/Contact"
          ? ""
          : "hidden"
      }`}
    >
      <div>
        <h3 className="font-bold text-2xl text-gray-700 my-5">About Us</h3>
        <ul className="flex flex-col gap-5 text-gray-700 opacity-90 font-sans font-bold">
          <li>100% Satisfaction Guarantee</li>
          <li>24/7 Customer Support</li>
          <li>Premium Quality Product</li>
          <li>Secure Transaction</li>
          <li>Product Delivered Safely</li>
          <li>Free Delivery</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl text-gray-700 my-5">Quick Links</h3>
        <ul className="flex flex-col gap-3 text-gray-700 opacity-90 font-sans text-sm">
          <Link
            className="hover:scale-105 duration-300 ease-out w-fit"
            href={"/Contact"}
          >
            Contact Information
          </Link>
          <Link
            className="hover:scale-105 duration-300 ease-out w-fit"
            href={"/Contact"}
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:scale-105 duration-300 ease-out w-fit"
            href={"/Contact"}
          >
            Refund Policy
          </Link>
          <Link
            className="hover:scale-105 duration-300 ease-out w-fit"
            href={"/Contact"}
          >
            Terms of Services
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
