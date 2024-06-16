"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { useContext } from "react";
import myContext from "@/context/Context";
const page = () => {
  const { route, setRoute } = useContext(myContext);
  useEffect(() => {
    setRoute("/");
  });
  return (
    <>
      <div className="h-full text-black font-sans pt-[105px]">
        <Hero />
        <h1 className="text-5xl font-bold text-black py-8 pt-8 font-sans px-12">
          Top Selling
        </h1>
        <div className="flex justify-center items-center">
          <Main />
        </div>
      </div>
    </>
  );
};

export default page;
