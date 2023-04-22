import SwitchButtons from "../UI/SwitchButtons";
import CardList from "../components/CardLists";
import Sort from "../components/Main/Sort";
import { useState, useEffect, FC, useContext } from "react";
import { SearchContext } from "../App";

interface Value {
  name: string;
  sortProperty: string;
}

const MainPage: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const buttonsList = ["Все", "Манга", "Манхва", "Маньхуа"];

  const [typeName, SetTypeName] = useState("Все");
  const [sortManga, setSortManga] = useState({
    name: "По рейтингу 10-1",
    sortProperty: "-rating",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);

  const order = `order=${
    sortManga.sortProperty.includes("-") ? "desc" : "asc"
  }`;
  const type = typeName !== "Все" ? `type=${typeName}&` : "";
  const sortBy = `sortBy=${sortManga.sortProperty.replace("-", "")}`;
  const limit = `limit=8`;

  const search = searchValue ? `search=${searchValue}&` : "";

  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${type}${search}${sortBy}&${order}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(mangaListPath)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setMangaList(arr);
        setIsLoading(false);
      });
  }, [typeName, sortManga, searchValue]);

  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5 ">
      <SwitchButtons
        buttonsList={buttonsList}
        value={typeName}
        onClickType={(name: string) => SetTypeName(name)}
      />
      <Sort
        value={sortManga}
        onClickType={(sort: Value) => setSortManga(sort)}
      />
      <CardList isLoading={isLoading} mangaList={mangaList} />
    </div>
  );
};

export default MainPage;
