"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import myContext from "@/context/Context";
import { useContext } from "react";
const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [comment, setComment] = useState("");
  const { route, setRoute } = useContext(myContext);

  const submitHandler = () => {
    setName("");
    setEmail("");
    setPhn("");
    setComment("");
  };
  useEffect(() => {
    setRoute("/Contact");
  });
  return (
    <div className="pt-[145px] p-5 font-mono text-gray-700">
      <h1 className="text-3xl font-bold pb-10">Contact Us</h1>
      <div className="flex flex-col gap-5 md:w-[40rem]">
        <div className="flex flex-col gap-5 sm:flex-row w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.value)}
            className="border border-gray-500 hover:border-2 hover:shadow-sm px-2 py-3 w-full"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.value)}
            className="border border-gray-500 hover:border-2 hover:shadow-sm px-2 py-3 w-full"
            placeholder="Email *"
          />
        </div>
        <input
          type="text"
          value={phn}
          onChange={(e) => setPhn(e.value)}
          className="border border-gray-500 hover:border-2 hover:shadow-sm px-2 py-3"
          placeholder="Phone number"
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.value)}
          className="border border-gray-500 hover:border-2 hover:shadow-sm px-2 pb-16 py-3"
          placeholder="Comment"
        />
      </div>
      <button
        onClick={() => {
          submitHandler();
        }}
        className="border px-12 py-3 mt-10 bg-black text-white"
      >
        Send
      </button>
    </div>
  );
};

export default page;
