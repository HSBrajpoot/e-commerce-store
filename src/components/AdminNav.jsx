import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Image from "next/image";
////////////////////////////////////////////////
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
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
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
////////////////////////////////////////////
const AdminNav = () => {
  return (
    <div
      className={`w-full px-3 py-4 md:px-8 lg:px-12 xl:px-16 bg-white font-sans flex justify-between items-center border-b-2 border-gray-200 `}
    >
      <div className="text-xl sm:text-3xl hover:cursor-pointer font-bold text-green-700  w-1/3">
        <img src={"/images/logo.png"} className="w-1/3" />
      </div>
      <h1 className="text-xl sm:text-3xl font-bold text-center w-1/3">
        Welcome Admin
      </h1>
      <div className="w-1/3 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <IoPersonCircleOutline className="sm:text-5xl text-3xl cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="p-10">
            <DialogHeader className="flex flex-col gap-5">
              <DialogTitle className="text-center text-xl">
                Admin Profile
              </DialogTitle>
              <DialogDescription>This is Admin profile.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-5 text-black">
              <h3>
                Username :{" "}
                <span className="px-5 text-muted-foreground">
                  Muhammad Saad
                </span>
              </h3>
              <h3>
                Password :{" "}
                <span className="px-5 text-muted-foreground">********</span>
              </h3>
              <div className="flex items-center gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Logout</Button>
                  </DialogTrigger>
                  <DialogContent className="p-10">
                    <DialogHeader className="flex flex-col gap-16">
                      <DialogTitle className="text-center text-xl">
                        Confirmation
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. Are you sure you want to
                        logout?
                      </DialogDescription>
                      <div className="flex items-center gap-3">
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button>Confirm</Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Sheet className="">
                  <SheetTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </SheetTrigger>
                  <SheetContent className="w-full">
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          value="Muhammad Saad"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Old password
                        </Label>
                        <Input
                          id="oldpassword"
                          type=""
                          value="@saad123"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          New password
                        </Label>
                        <Input
                          id="newpassword"
                          type=""
                          value=""
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Confirm password
                        </Label>
                        <Input
                          id="confirm"
                          type=""
                          value=""
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminNav;
