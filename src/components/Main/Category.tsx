import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryName } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";
import SwitchButtons from "../../UI/SwitchButtons";

const Category: FC = () => {
  const { categoryName } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const onClickSetCategoryName = (name: string) => {
    dispatch(setCategoryName(name));
  };

  const buttonsList = ["Все", "Манга", "Манхва", "Маньхуа"];

  return (
    <SwitchButtons
      buttonsList={buttonsList}
      value={categoryName}
      onClickType={(name: string) => onClickSetCategoryName(name)}
      classes="col-start-1 col-end-13"
    />
  );
};

export default Category;
