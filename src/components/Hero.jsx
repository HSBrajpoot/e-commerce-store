"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import myContext from "@/context/Context";
const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full py-24 flex-col justify-center items-center gap-16 border-b pb-10 bg-gray-100">
        <div className="h-32 gap-8 p-4 pt-16 flex justify-between sm:justify-center sm:gap-20 items-center">
          <div>
            <div className="w-28 h-28 pt-2 pl-1 bg-gray-500 overflow-hidden border rounded-full">
              <Image src={"/images/imrankhan.png"} width={100} height={100} />
            </div>
          </div>
          <div className="font-sans text-right flex flex-col">
            <h3 className="font-bold text-xl text-green-800">
              إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
            </h3>
            <h3>ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں</h3>
          </div>
        </div>
        <button
          onClick={() => {
            router.push("/Catalog");
          }}
          className="border px-5 py-2 font-bold border-black hover:scale-105 duration-300 ease-out"
        >
          ShopNow
        </button>
      </div>
    </>
  );
};

export default Hero;
