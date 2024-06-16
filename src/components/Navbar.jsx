"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useContext } from "react";
import myContext from "@/context/Context";
import Banner from "./Banner";
import { Button } from "./ui/button";
import Cart from "./Cart";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  //////
  const items = [
    {
      key: "1",
      type: "group",
      label: "Mens Fashion",
      children: [
        {
          key: "1-1",
          label: "Perfumes",
        },
        {
          key: "1-2",
          label: "Watches",
        },
      ],
    },
    {
      key: "2",
      label: "Shoes",
      children: [
        {
          key: "2-1",
          label: "Joggers",
        },
        {
          key: "2-2",
          label: "Sneakers",
        },
        {
          key: "2-3",
          label: "Formals",
        },
        {
          key: "2-4",
          label: "Traditional",
        },
        {
          key: "2-5",
          label: "Others",
        },
      ],
    },
    {
      key: "3",
      label: "Clothes",
      // disabled: true,
      children: [
        {
          key: "3-1",
          label: "T-shirts",
        },
        {
          key: "3-2",
          label: "Casual shirts",
        },
        {
          key: "3-3",
          label: "Traditional",
        },
        {
          key: "3-4",
          label: "Pents",
        },
      ],
    },
  ];
  ////////
  const { menu, setMenu } = useContext(myContext);
  const { cartItems } = useContext(myContext);
  const { route, setRoute } = useContext(myContext);
  const router = useRouter();
  //////////////////////////////////////
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  ///////////////////////////////////////////
  return (
    <div
      className={`top-0 left-0 fixed w-full ${
        route === "/" || route === "/Catalog" || route === "/Contact"
          ? ""
          : "hidden"
      } z-50 bg-white shadow-lg transition-all ${
        visible ? "transform translate-y-0" : "-translate-y-full"
      }`}
    >
      <Banner />
      <div
        className={`w-full px-3 py-4 md:px-8 lg:px-12 xl:px-16 font-sans flex justify-between items-center border-b-2 border-gray-200 `}
      >
        {menu ? (
          <IoClose
            onClick={() => setMenu(!menu)}
            className="text-3xl hover:cursor-pointer w-1/3 sm:hidden scale-105 hover:opacity-80 hover:scale-110 duration-300 ease-out"
          />
        ) : (
          <HiMenu
            onClick={() => setMenu(!menu)}
            className="text-3xl hover:cursor-pointer w-1/3 sm:hidden hover:opacity-80 hover:scale-105 duration-300 ease-out"
          />
        )}

        <div
          onClick={() => router.push("/")}
          className="text-xl sm:text-3xl w-1/6 hover:cursor-pointer sm:block flex justify-center items-center font-bold"
        >
          <img src={"/images/logo.png"} className="" />
        </div>
        <ul className="sm:flex w-full pl-16 items-center gap-7 hidden">
          <Link
            href={"/"}
            className={`border-b-2 ${
              route === "/" ? "border-green-700" : "border-transparent"
            } duration-300 ease-out hover:border-green-700`}
          >
            Home
          </Link>
          <Link
            href={"/Catalog"}
            className={`border-b-2 ${
              route === "/Catalog" ? "border-green-700" : "border-transparent"
            } duration-300 ease-out hover:border-green-700`}
          >
            Catalog
          </Link>
          <Dropdown
            menu={{
              items,
            }}
          >
            <Link href={""} onClick={(e) => e.preventDefault()}>
              <Space className="flex items-center cursor-pointer">
                Mens
                <FaAngleDown />
              </Space>
            </Link>
          </Dropdown>

          <Link
            href={"/Contact"}
            className={`border-b-2 ${
              route === "/Contact" ? "border-green-700" : "border-transparent"
            } duration-300 ease-out hover:border-green-700`}
          >
            Contact
          </Link>
          <Link href={"/Admin"}>
            <Button className="flex items-center gap-2">
              Admin <FaLock />
            </Button>
          </Link>
        </ul>
        <div className="flex items-center gap-5 justify-end">
          {/* <div className="border border-blue-400 text-bold hover:bg-transparent duration-300 ease-out hover:cursor-pointer p-2 bg-blue-400">
            Search
          </div> */}
          <Link
            href={"/Cart"}
            className="relative py-1 px-2 hover:cursor-pointer hover:opacity-80 hover:scale-105 duration-300 ease-out"
          >
            {cartItems ? (
              <p className=" absolute right-0 top-0 border border-green-900 bg-green-700 h-4 w-6 flex justify-center items-center text-white rounded-full">
                {cartItems}
              </p>
            ) : (
              ""
            )}
            <IoCartOutline className="text-3xl" />
          </Link>
        </div>
      </div>
      {/* {menu ? ( */}
      <div
        className={`border-b border-r transition-all ${
          menu ? "transform translate-x-0" : "-translate-x-full"
        } ${
          visible ? "transform translate-y-0" : "-translate-y-full"
        } fixed sm:hidden rounded-br-md px-8 pb-12 bg-gray-100 pt-10 w-1/2`}
      >
        <ul className="flex flex-col gap-12 text-xl text-gray-800 font-bold">
          <Link
            onClick={() => {
              setMenu(!menu);
            }}
            href="/"
            className={`${route === "/" ? "text-green-700" : ""}`}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setMenu(!menu);
            }}
            href="/Catalog"
            className={`${route === "/Catalog" ? "text-green-700" : ""}`}
          >
            Catalog
          </Link>
          <Link
            onClick={() => {
              setMenu(!menu);
            }}
            href="/Contact"
            className={`${route === "/Contact" ? "text-green-700" : ""}`}
          >
            Contact
          </Link>
        </ul>
      </div>
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default Navbar;
