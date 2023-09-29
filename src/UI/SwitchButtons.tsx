import { FC } from "react";
import Button from "./Button";

interface SwitchButtonsProps {
  buttonsList: Array<string>;
  value: string;
  onClickType: Function;
}
const SwitchButtons: FC<SwitchButtonsProps> = ({
  buttonsList,
  value,
  onClickType,
}) => {
  return (
    <div className="flex gap-x-5 col-start-1 col-end-12 h-fit">
      {buttonsList.map((typeName: string, index: number) => {
        return (
          <Button
            children={typeName}
            key={index}
            classes={
              value === typeName ? "bg-black text-white" : "bg-white text-black"
            }
            onclick={() => onClickType(typeName)}
          />
        );
      })}
    </div>
  );
};

export default SwitchButtons;
