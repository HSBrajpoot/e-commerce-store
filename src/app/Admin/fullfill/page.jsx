"use client";
import React, { useState } from "react";
import { Pagination } from "antd";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import MyContext from "@/context/Context";
import { useContext } from "react";
import AdminNav from "@/components/AdminNav";
import dynamic from "next/dynamic";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  /////
  const [data, setData] = useState([
    {
      order: "ORD1",
      name: "Haseeb",
      email: "haseeb@gmail.com",
      address: "defence phase 1, house # 92, street # 4, vehari",
      city: "vehari",
      phone: "03441945870",
      date: Date.now(),
      amount: 1250,
      products: ["Product 1", "Product 2", "Product 3"],
    },
    {
      order: "ORD2",
      name: "Ali",
      email: "haseeb@gmail.com",
      address: "defence phase 1, house # 92, street # 4, vehari",
      city: "vehari",
      phone: "03441945870",
      date: Date.now(),
      amount: 1050,
      products: ["Product 1", "Product 2", "Product 3"],
    },
    {
      order: "ORD3",
      name: "Umair",
      email: "haseeb@gmail.com",
      address: "defence phase 1, house # 92, street # 4, vehari",
      city: "vehari",
      phone: "03441945870",
      date: Date.now(),
      amount: 1700,
      products: ["Product 1", "Product 2", "Product 3"],
    },
    {
      order: "ORD4",
      name: "Saad",
      email: "haseeb@gmail.com",
      address: "defence phase 1, house # 92, street # 4, vehari",
      city: "vehari",
      phone: "03441945870",
      date: Date.now(),
      amount: 500,
      products: ["Product 1", "Product 2", "Product 3"],
    },
    {
      order: "ORD5",
      name: "Kashif",
      email: "haseeb@gmail.com",
      address: "defence phase 1, house # 92, street # 4, vehari",
      city: "vehari",
      phone: "03441945870",
      date: Date.now(),
      amount: 1130,
      products: ["Product 1", "Product 2", "Product 3"],
    },
  ]);
  const { setRoute } = useContext(MyContext);
  useEffect(() => {
    setRoute("/Admin/add");
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-50 min-h-screen h-full">
      <AdminNav />
      <h1 className="text-5xl font-bold">New Orders</h1>
      <div className="w-3/4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Product Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((i, index) => {
              return (
                <TableRow key={index} className="">
                  <TableCell className="font-medium">{i.order}</TableCell>
                  <TableCell>{i.name}</TableCell>
                  <TableCell>{i.phone}</TableCell>
                  <TableCell>{i.date}</TableCell>
                  <TableCell className="text-right">RS. {i.amount}</TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                onClick={() => {
                                  console.log(i);
                                }}
                                variant="link"
                                className="text-blue-500"
                              >
                                More
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md flex flex-col gap-10">
                              <DialogHeader>
                                <DialogTitle>Order Details</DialogTitle>
                                <DialogDescription>
                                  Check order details and fullfill now.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex flex-col gap-3 font-sans">
                                <p>
                                  Order ID :{" "}
                                  <span className="text-muted-foreground">
                                    {i.order}
                                  </span>
                                </p>
                                <p>
                                  Customer name :{" "}
                                  <span className="text-muted-foreground">
                                    {i.name}
                                  </span>
                                </p>
                                <p>
                                  Email :{" "}
                                  <span className="text-muted-foreground">
                                    {i.email}
                                  </span>
                                </p>
                                <p>
                                  Phone no :{" "}
                                  <span className="text-muted-foreground">
                                    {i.phone}
                                  </span>
                                </p>
                                <p>
                                  City :{" "}
                                  <span className="text-muted-foreground">
                                    {i.city}
                                  </span>
                                </p>
                                <p>
                                  Address :{" "}
                                  <span className="text-muted-foreground">
                                    {i.address}
                                  </span>
                                </p>
                                <Accordion type="single" collapsible>
                                  <AccordionItem value="item-1">
                                    <AccordionTrigger className=" decoration-transparent">
                                      Products details
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      {i.products.map((j, index) => (
                                        <p key={index}>{j}</p>
                                      ))}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                                <p className="font-bold">
                                  Amount :{" "}
                                  <span className="text-muted-foreground">
                                    RS. {i.amount}
                                  </span>
                                </p>
                              </div>
                              <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                  <div className="flex gap-5">
                                    <Button type="button" variant="outline">
                                      Close
                                    </Button>
                                    <Button type="button" variant="">
                                      Delivered
                                    </Button>
                                    <Button type="button" variant="">
                                      Returned
                                    </Button>
                                  </div>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click for details.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(page), { ssr: false });
// export default page;
