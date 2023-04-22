import SwitchButtons from "../UI/SwitchButtons";
import CardList from "../components/CardLists";
import Sort from "../components/Main/Sort";
import { useState, useEffect, FC, useContext } from "react";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setCategoryName } from "../redux/slices/filterSlice";
import axios from "axios";
import Category from "../components/Main/Category";
import SelectGenre from "../components/Main/SelectGenre";

const MainPage: FC = () => {
  const { categoryName, sort } = useSelector(
    (state: RootState) => state.filter
  );

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);

  const order = `order=${sort.sortProperty.includes("-") ? "desc" : "asc"}`;

  const type = categoryName !== "Все" ? `type=${categoryName}&` : "";
  const sortBy = `sortBy=${sort.sortProperty.replace("-", "")}`;

  const search = searchValue ? `search=${searchValue}&` : "";

  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${type}${search}${sortBy}&${order}`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(mangaListPath).then((res) => {
      setMangaList(res.data);
      setIsLoading(false);
    });
  }, [categoryName, sort, searchValue]);

  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5 ">
      <div className="flex flex-col col-end-9 col-start-1 gap-y-10">
        <Category />
        <CardList isLoading={isLoading} mangaList={mangaList} />
      </div>
      <div className="flex flex-col col-end-13 col-start-10 gap-y-10">
        <Sort />
        <SelectGenre />
      </div>
    </div>
  );
};

export default MainPage;
