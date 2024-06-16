"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Mini = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/Product/1")}
      className="flex flex-col gap-1 cursor-pointer"
    >
      <div className="overflow-hidden relative bg-center bg-cover w-44 h-32 flex justify-center items-center">
        <Image
          className="rounded-md"
          src={"/product/wear1.jpg"}
          width={250}
          height={250}
        />
        <div className="bg-blue-900 bottom-3 left-2 text-white text-sm px-3 py-1 absolute rounded-full">
          Sale
        </div>
      </div>
      <h5 className="w-44 text-xs-sm tracking-wider">
        2-in-1 Dumpling Wrapper Mold Samosa Maker with Pastry Handle
      </h5>
      <p className=" tracking-widest text-xs-sm font-light line-through font-sans">
        Rs.1800.00 PKR
      </p>
      <p className=" tracking-widest text-sm font-bold font-sans">
        Rs.1300.00 PKR
      </p>
    </div>
  );
};

export default Mini;
