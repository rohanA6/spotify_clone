"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

//Icons
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `
     h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className=" w-full mb-4 flex items-center justify-between">
        <div className=" hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        {/* Mobile buttons */}
        <div className=" flex md:hidden gap-x-2 items-center">
          <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome size={20} className=" text-black" />
          </button>

          <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch size={20} className=" text-black" />
          </button>
        </div>

        <div className=" flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className=" bg-transparent font-medium text-neutral-300">
                Sign Up
              </Button>
            </div>
            <div>
              <Button className=" bg-white font-medium px-6 py-2">LogIn</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
