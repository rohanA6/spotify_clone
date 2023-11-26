import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemsProps {
  icon: IconType;
  href: string;
  active: boolean;
  lable: string;
}

const SidebarItems = ({
  icon: Icon,
  href,
  active,
  lable,
}: SidebarItemsProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        ` flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer text-neutral-400 transition hover:text-white py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26}/>
      <p className=" w-full truncate">{lable}</p>
    </Link>
  );
};

export default SidebarItems;
