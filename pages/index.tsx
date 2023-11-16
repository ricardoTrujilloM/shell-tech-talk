import Image from "next/image";
import { Inter } from "next/font/google";
import { ComponentType, useState } from "react";
import dynamic from "next/dynamic";
import Form from "./components/Form";

const inter = Inter({ subsets: ["latin"] });

type CardProps = {
  setSearchResult?: (value: any) => void;
};

const CardMfe: ComponentType<CardProps> = dynamic(
  // @ts-ignore
  () => import("CardMFE/Card"),
  {
    ssr: false,
    suspense: true,
  }
);

export default function Home() {
  const [ingredientsList, setIngredientsList] = useState([]);
  return (
    <div className="flex mb-4 items-center">
      <div className="w-1/2 m-4 ml-10 p-6 align-middle bg-gray-400 h-full rounded-md">
        <Form ingredientsText={ingredientsList.join("\r\n")} />
      </div>
      <div className="flex mb-4 items-center w-1/2 p-6 h-full place-content-center">
        <CardMfe setSearchResult={setIngredientsList} />
      </div>
    </div>
  );
}
