"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

//Icons
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItems from "./SidebarItems";
import Library from "./Library";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const routs = useMemo(
    () => [
      {
        icon: HiHome,
        lable: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        lable: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );
  return (
    <div className=" flex h-full">
      <div className=" hidden md:flex flex-col gap-y-2 h-full w-[300px] md:py-2 md:pl-2  bg-black">
        <Box>
          <div className=" flex flex-col gap-y-4 px-5 py-4">
            {routs.map((route, index) => (
              <SidebarItems key={index} {...route} />
            ))}
          </div>
        </Box>
        <Box className=" overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className=" h-full overflow-y-auto py-0 md:px-2 md:py-2 flex-1">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
