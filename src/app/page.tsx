import { PlusIcon } from "@heroicons/react/24/solid";
import { FormulaList } from "@/components/FormulaList";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 lg:px-24 py-10 bg-primary dark:bg-darkMode-primary min-h-[90vh] w-full">
      <div className="w-full">
        <h1 className="text-2xl text-white lg:text-5xl">
          Seja bem vindo ao Calculi!
        </h1>
        <h1 className="lg:text-2xl text-xs text-gray-100">
          Faça todos os seus calculos de forma simples e fácil
        </h1>
      </div>

      <FormulaList
        title="Formulas financeiras"
        formulas={[
          {
            icon: <PlusIcon />,
            title: "Juros simples",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Juros compostos",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Inflação",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Índice Basileia",
            href: "",
          },
        ]}
      />

      <FormulaList
        title="Formulas matemáticas"
        formulas={[
          {
            icon: <PlusIcon />,
            title: "Operações básicas",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Equação 1º grau",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Equação 2º grau",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Trigonometria",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Área e perimetro",
            href: "",
          },
        ]}
      />

      <FormulaList
        title="Formulas físicas"
        formulas={[
          {
            icon: <PlusIcon />,
            title: "Velocidade",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Aceleração",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Força",
            href: "",
          },
          {
            icon: <PlusIcon />,
            title: "Energia",
            href: "",
          },
        ]}
      />
    </div>
  );
}
