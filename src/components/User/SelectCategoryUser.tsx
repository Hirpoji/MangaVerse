import { FC, useState } from "react";
import SwitchButtons from "../../UI/SwitchButtons";

interface SelectCategoryUser {
  value: string;
  setValue: Function;
}

const SelectCategoryUser: FC<SelectCategoryUser> = ({ value, setValue }) => {
  const buttonsList = ["Избранное", "Редактировать"];
  return (
      <SwitchButtons
        buttonsList={buttonsList}
        value={value}
        onClickType={setValue}
      />
  );
};

export default SelectCategoryUser;
