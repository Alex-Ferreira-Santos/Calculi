"use client";
import Logo from "@/assets/imgs/Logo.png";
import Image from "next/image";

export function Footer() {

  return (
    <footer className="w-full dark:bg-darkMode-third bg-third p-4 flex justify-between items-center transition-all dark:text-white min-h-[10vh]">
      <Image src={Logo} alt="Logo" priority={true} />
    </footer>
  );
}
