import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="  bg-neutral-900 md:rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className=" mb-2">
          <h1 className=" text-white text-3xl font-semibold">
            Welcome back
          </h1>

          <div className=" grid grid-cols-1 ms:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4"> 

          </div>
        </div>
      </Header>
    </div>
  );
}
