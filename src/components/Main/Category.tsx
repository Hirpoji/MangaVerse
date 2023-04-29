import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryName } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";
import SwitchButtons from "../../UI/SwitchButtons";

export const categoryList = ["Все", "Манга", "Манхва", "Маньхуа"];

const Category: FC = () => {
  const { categoryName } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const onClickSetCategoryName = (name: string) => {
    dispatch(setCategoryName(name));
  };

  return (
    <SwitchButtons
      buttonsList={categoryList}
      value={categoryName}
      onClickType={(name: string) => onClickSetCategoryName(name)}
      classes="col-start-1 col-end-13"
    />
  );
};

export default Category;
