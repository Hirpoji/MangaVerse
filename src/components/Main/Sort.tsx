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
    { name: "По рейтингу", sortProperty: "rating" },
    { name: "По алфавиту", sortProperty: "name" },
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
