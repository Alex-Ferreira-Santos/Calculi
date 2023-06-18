import Link from "next/link";
import { ReactNode } from "react";

type TFormulaList = {
  title: string;
  formulas: {
    icon: ReactNode;
    title: string;
    href: string;
  }[];
};

export function FormulaList({ formulas, title }: TFormulaList) {
  return (
    <div className="w-full flex flex-col gap-4 bg-white p-4 rounded-lg  dark:bg-darkMode-third">
      <div className="flex justify-between items-center">
        <p className="lg:text-2xl font-bold text-primary">{title}</p>
        <button className="bg-secondary p-2 text-white rounded-lg lg:text-base text-xs">
          Ver todas
        </button>
      </div>

      <div className="lg:flex lg:gap-8 child-hover:bg-primary child-hover:text-white !transition-all text-secondary grid grid-cols-2 md:grid-cols-4 gap-4">
        {formulas.map(({ icon, title, href }) => (
          <Link
            href={href}
            key={title}
            className="border border-primary rounded-lg lg:p-4 p-2 flex flex-col items-center lg:min-w-[10rem]"
          >
            <div className="w-10 lg:w-20">{icon}</div>
            <p className="font-medium lg:text-base text-xs">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
