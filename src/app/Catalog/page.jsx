"use client";
import React from "react";
import { useEffect } from "react";
import Mini from "@/components/Mini";
import myContext from "@/context/Context";
import { useContext } from "react";
const page = () => {
  const { route, setRoute } = useContext(myContext);
  useEffect(() => {
    setRoute("/Catalog");
  });
  return (
    <div className="pt-[135px] p-2 sm:px-6 md:px-8 lg:px-16 xl:px-24 font-mono">
      <h1 className="text-5xl pt-10 font-bold pb-10 text-gray-700">
        All Products
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
        <Mini />
      </div>
    </div>
  );
};

export default page;
