import Select from "../../UI/Select";
import { FC } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

const Sort: FC= () => {
  const sort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();

  const onClickSetSort = (value : object) =>{
    dispatch(setSort(value));
  }

  const elections = [
    { name: "По рейтингу 10-1", sortProperty: "-rating" },
    { name: "По рейтингу 1-10", sortProperty: "rating" },
    { name: "По алфавиту А-Я", sortProperty: "name" },
    { name: "По алфавиту Я-А", sortProperty: "-name" },
  ];
  return (
    <Select
      elections={elections}
      value={sort}
      onClickType={onClickSetSort}
    />
  );
};

export default Sort;
