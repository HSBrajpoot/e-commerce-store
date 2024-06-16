"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Login from "@/components/Login";
import MyContext from "@/context/Context";
import { useContext } from "react";
import AdminNav from "@/components/AdminNav";
import { MdInventory } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
////////////////////////////////////////////////
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { Button } from "antd";
///////////////////////////////////////////////
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
////////////////////////////////////////////
const page = () => {
  /////
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  ////////
  const { setRoute } = useContext(MyContext);
  useLayoutEffect(() => {
    setRoute("/Admin");
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-50 h-screen">
      <AdminNav />
      <div className="mt-32 w-full md:w-2/5 flex flex-col items-center p-5 gap-8">
        <Dialog>
          <DialogTrigger asChild>
            <button className="border relative flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
              All Orders
              <FaBell className={`text-xl`} />
              <p className="absolute -top-3 -right-3 rounded-full bg-red-500 border-2 border-white w-9 h-9 flex justify-center items-center text-white font-bold">
                1
              </p>
            </button>
          </DialogTrigger>
          <DialogContent className="p-10 w-[50rem] flex flex-col items-center justify-center">
            <DialogHeader className="flex flex-col gap-5">
              <DialogTitle className="text-center text-xl">
                All Orders
              </DialogTitle>
              <DialogDescription>All orders of your store.</DialogDescription>
            </DialogHeader>
            <Link
              href={"/Admin/new"}
              className="border text-red-500 relative flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3"
            >
              New Orders
              <FaBell className={`text-xl text-red-500`} />
              <p className="absolute -top-3 -right-3 rounded-full bg-red-500 border border-white w-7 h-7 flex justify-center items-center text-white font-bold">
                7
              </p>
            </Link>
            <Link
              href={"/Admin/fullfill"}
              className="border relative flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3"
            >
              Fullfilled Orders
              <RiShoppingBasketFill className={`text-xl`} />
              <p className="absolute -top-3 -right-3 rounded-full bg-black border border-white w-7 h-7 flex justify-center items-center text-white font-bold">
                8
              </p>
            </Link>
            <Link
              href={"/Admin/delivered"}
              className="border relative flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3"
            >
              Delivered Orders
              <RiShoppingBasketFill className={`text-xl`} />
            </Link>
            <Link
              href={"/Admin/returned"}
              className="border relative flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3"
            >
              Returned Orders
              <RiShoppingBasketFill className={`text-xl`} />
            </Link>
          </DialogContent>
        </Dialog>

        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
          View All Products
          <MdInventory className="text-xl" />
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3  w-2/3">
              Add Products
              <MdLibraryAdd className="text-xl" />
            </button>
          </DialogTrigger>
          <DialogContent className="p-10">
            <DialogHeader className="flex flex-col gap-5">
              <DialogTitle className="text-center text-xl">
                Add Products
              </DialogTitle>
              <DialogDescription>Add a new product.</DialogDescription>
              <div className="flex flex-col gap-4 text-black">
                <Input
                  type="text"
                  placeholder="Product name"
                  className="text-black"
                />
                <Input
                  type="text"
                  placeholder="Product description"
                  className="text-black"
                />
                <Input
                  type="number"
                  placeholder="Original price"
                  className=""
                />
                <Input
                  type="number"
                  placeholder="Discounted price"
                  className="text-black"
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  className="text-black"
                />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categorie</SelectLabel>
                      <SelectItem value="mens">Mens</SelectItem>
                      <SelectItem value="womens">Womens</SelectItem>
                      <SelectItem value="footwear">Footwear</SelectItem>
                      <SelectItem value="kitchen">Kitchen</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <ImgCrop rotate aspect={3 / 2}>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 5 && "+ Upload"}
                  </Upload>
                </ImgCrop>
                <Button>Submit</Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
          Manage Store
          <MdManageAccounts className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default page;
