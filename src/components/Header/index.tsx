"use client";
import Logo from "@/assets/imgs/Logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setTheme(systemTheme || "light");
  }, [systemTheme]);

  return (
    <header className="w-full dark:bg-darkMode-third bg-third p-4 flex justify-between items-center transition-all dark:text-white min-h-[10vh]">
      <section
        className={`flex flex-col absolute w-full z-50 bg-third dark:bg-darkMode-primary left-0 p-4 gap-4 !transition-all ${
          openMenu ? "top-0 bottom-0" : "-top-[100vh]"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 pb-2">
          <h2 className="text-lg">Menu</h2>
          <button
            className="md:hidden"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <XMarkIcon className="w-8 dark:text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-2 child:border-b-2 child:pb-2 dark:child:text-gray-300 text-gray-700">
          <Link href="" className="min-h-4">
            Formulas financeiras
          </Link>
          <Link href="" className="min-h-4">
            Formulas matemáticas
          </Link>
          <Link href="" className="min-h-4">
            Formulas físicas
          </Link>
        </div>
      </section>

      <Image src={Logo} alt="Logo" priority={true} />

      <div className="grid-cols-3 md:text-sm lg:text-lg xl:text-xl w-full px-10  dark:child:text-gray-300 text-gray-700 child-hover:text-secondary child-hover:font-bold child:text-center !transition-all hidden md:grid ">
        <Link href="" className="min-h-4">
          Formulas financeiras
        </Link>
        <Link href="" className="min-h-4">
          Formulas matemáticas
        </Link>
        <Link href="" className="min-h-4">
          Formulas físicas
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          title="Menu"
          className="md:hidden"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <Bars4Icon className="w-8" />
        </button>

        <button
          className="p-2 bg-darkMode-primary dark:bg-gray-200 rounded-full"
          title="Mudar o tema"
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            }
            if (theme === "light") {
              setTheme("dark");
            }
          }}
        >
          {theme === "dark" ? (
            <SunIcon className="w-5 h-5 text-black" />
          ) : (
            <MoonIcon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </header>
  );
}
