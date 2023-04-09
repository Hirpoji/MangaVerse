import { FC } from "react";
import Button from "./Button";

interface SwitchButtonsProps {
  buttonsList: Array<string>;
  value: string;
  onClickType: Function;
  classes?: string;
}
const SwitchButtons: FC<SwitchButtonsProps> = ({
  buttonsList,
  value,
  onClickType,
  classes,
}) => {
  return (
    <div className={`flex items-center gap-30 ${classes}`}>
      <div className="flex gap-x-5">
        {buttonsList.map((typeName: string, index: number) => {
          return (
            <Button
              children={typeName}
              key={index}
              classes={
                value === typeName
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
              onclick={() => onClickType(typeName)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwitchButtons;
