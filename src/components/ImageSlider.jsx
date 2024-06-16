"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ImageSlider = ({ value }) => {
  const [current, setCurrent] = useState(0);
  console.log(value.length);
  const next = () => {
    if (current === value.length - 1) {
      setCurrent(0);
    } else if (current < value.length - 1) {
      setCurrent(current + 1);
    }
  };
  const prev = () => {
    if (current === 0) {
      setCurrent(value.length - 1);
    } else if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <div className="h-56 my-3 sm:w-[30rem] sm:h-72 md:h-[300px] md:w-[600px] md:self-start self-center overflow-hidden relative rounded-md flex justify-center items-center">
      <Image
        className="rounded-md"
        src={value[current].url}
        width={700}
        height={700}
      />
      <IoIosArrowBack
        onClick={prev}
        className="absolute text-2xl bg-gray-100 rounded-full left-3 scale-105 shadow-md shadow-black hover:scale-110 duration-300 ease-out cursor-pointer"
      />
      <IoIosArrowForward
        onClick={next}
        className="absolute text-2xl bg-gray-100 rounded-full right-3 scale-105 shadow-md shadow-black hover:scale-110 duration-300 ease-out cursor-pointer"
      />
      <div className="absolute bottom-3 flex justify-center items-center gap-2">
        {value?.map((i) => {
          console.log(i.url);
          console.log(value[current].url);
          return (
            <div
              className={` ${
                i.url === value[current].url
                  ? "opacity-100 w-3 h-3"
                  : "opacity-80 w-2 h-2"
              } rounded-full bg-white`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageSlider;
