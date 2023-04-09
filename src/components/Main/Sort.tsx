import Select from "../../UI/Select";
import { FC } from "react";

interface SortProps {
  value: Value;
  onClickType: (value: Value) => void;
}

interface Value {
  name: string;
  sortProperty: string;
}

const Sort: FC<SortProps> = ({ value, onClickType }) => {
  const elections = [
    { name: "По рейтингу 10-1", sortProperty: "-rating" },
    { name: "По рейтингу 1-10", sortProperty: "rating" },
    { name: "По алфавиту А-Я", sortProperty: "name" },
    { name: "По алфавиту Я-А", sortProperty: "-name" },
  ];
  return (
    <Select
      classes={"col-start-11 col-end-13"}
      elections={elections}
      value={value}
      onClickType={onClickType}
    />
  );
};

export default Sort;
