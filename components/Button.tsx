import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `
    w-full rounded-full bg-green-500 border border-transparent p-3 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
