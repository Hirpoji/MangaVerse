import { FC, useState } from "react";
import Title from "./Title";
import SwitchButtons from "../../UI/SwitchButtons";
import Description from "./Description";
import Genre from "./Genre";
import Related from "./Related";

const Information: FC = () => {
  const [typeName, SetTypeName] = useState("Информация");
  const buttonsList = ["Информация", "Главы"];
  return (
    <div className="grid grid-cols-10 gap-y-10 gap-x-5">
      <Title/>
      <SwitchButtons
        value={typeName}
        buttonsList={buttonsList}
        onClickType={(name: string) => SetTypeName(name)}
      />
      <Description/>
      <Genre/>
      <Related/>
    </div>
  );
};

export default Information;
