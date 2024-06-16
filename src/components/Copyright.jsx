"use client";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { useContext } from "react";
import myContext from "@/context/Context";
const Copyright = () => {
  const { route, setRoute } = useContext(myContext);
  return (
    <div
      className={`w-full h-fit px-5 py-5 flex justify-center items-center font-sans text-sm text-gray-700 opacity-70 gap-1 ${
        route === "/" || route === "/Catalog" || route === "/Contact"
          ? ""
          : "hidden"
      }`}
    >
      <FaRegCopyright className="" />
      2024, All Rights Reserved by Muhammad Saad
    </div>
  );
};

export default Copyright;
