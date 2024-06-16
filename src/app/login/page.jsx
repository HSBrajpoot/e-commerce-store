"use client";
import React, { useEffect } from "react";
import Login from "@/components/Login";
import MyContext from "@/context/Context";
import { useLayoutEffect } from "react";
import { useContext } from "react";
const page = () => {
  const { setRoute } = useContext(MyContext);
  useEffect(() => {
    setRoute("/login");
  }, []);
  return (
    <div className="flex w-full bg-gray-100 h-screen justify-center items-center">
      <Login />
    </div>
  );
};

export default page;
