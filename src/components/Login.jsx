"use client";
import React from "react";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" h-fit pt-8 pb-12 rounded-md px-12 w-96 flex flex-col text-gray-700 gap-3 border font-mono">
      <h1 className="text-center text-2xl font-bold">Admin Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.value)}
        placeholder="Username"
        className="border px-3 py-2 rounded-md border-gray-700"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.value)}
        placeholder="Password"
        className="border px-3 py-2 rounded-md border-gray-700"
      />
      <button className="border hover:scale-105 transition-transform  text-white bg-black rounded-md py-2">
        Login
      </button>
    </div>
  );
};

export default Login;
