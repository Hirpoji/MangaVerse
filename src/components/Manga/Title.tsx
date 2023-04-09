import { FC } from "react";
import SwitchButtons from "../../UI/SwitchButtons";
import { useState } from "react";

const Title: FC = () => {
  const buttonsList = ["Информация", "Главы"];
  const [buttonName, SetButtonName] = useState("Информация");
  return (
    <div className="flex flex-col gap-y-3 col-start-1 col-end-11 h-fit">
      <div className="text-4xl font-bold">Кэй-он! Лёгкая Музыка!</div>
      <div className="text-xl">K-On!</div>
    </div>
  );
};

export default Title;
