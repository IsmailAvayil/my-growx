"use client";
import Button from "@/app/reusable-components/Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const menuItems = ["Home", "About", "Service", "Page"];

  return (
    <>
      <div className="flex items-center justify-between py-[29.9px] px-6 relative">
        <div className="flex items-center">
          <Image
            src="assets/icons/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h2 className="text-[32px] font-[500]">GrowX</h2>
        </div>

        <ul className="bg-[#CCCCCC1A] rounded-[30px] flex px-6 py-3 gap-12 fixed left-1/2 transform -translate-x-1/2  z-50 backdrop-blur-md ">
          {menuItems.map((item) => {
            const link = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === link;

            return (
              <li
                key={item}
                className={`cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-[#FE4A0F] font-semibold" : "text-gray-700"
                }`}
              >
                <Link href={link}>{item}</Link>
              </li>
            );
          })}
        </ul>

        <Button text="Contact" />
      </div>

      <img
        src={"assets/images/header-bg-left-line.svg"}
        alt="bg-line"
        className="absolute top-0 left-0"
      />
      <img
        src={"assets/images/header-bg-right-line.svg"}
        alt="bg-line"
        className="absolute top-0 right-0"
      />
    </>
  );
};

export default Header;
