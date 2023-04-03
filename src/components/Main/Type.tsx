import { FC } from "react";
import Button from "../../UI/Button";

const typeList = ["Все", "Манга", "Манхва", "Маньхуа"];

interface TypeProps {
  value: string;
  onClickType: Function;
}
const Type: FC<TypeProps> = ({ value, onClickType }) => {
  return (
    <div>
      <div className="flex items-center gap-30">
        <div className="flex gap-x-5">
          {typeList.map((typeName: string, index: number) => {
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
    </div>
  );
};

export default Type;
