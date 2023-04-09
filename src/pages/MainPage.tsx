import SwitchButtons from "../UI/SwitchButtons";
import CardList from "../components/CardLists";
import Sort from "../components/Main/Sort";
import { useState, useEffect, FC } from "react";
import Pagination from "../UI/Pagination";
interface Value {
  name: string;
  sortProperty: string;
}

interface MainPageProps {
  searchValue: string;
  setSearchValue: Function;
}

const MainPage: FC<MainPageProps> = ({ searchValue, setSearchValue }) => {
  const buttonsList = ["Все", "Манга", "Манхва", "Маньхуа"];
  const [typeName, SetTypeName] = useState("Все");
  const [sortManga, setSortManga] = useState({
    name: "По рейтингу 10-1",
    sortProperty: "-rating",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const order = `order=${
    sortManga.sortProperty.includes("-") ? "desc" : "asc"
  }`;
  const type = typeName !== "Все" ? `type=${typeName}&` : "";
  const sortBy = `sortBy=${sortManga.sortProperty.replace("-", "")}`;
  const limit = `limit=8`;
  const page = `page=${currentPage}`;

  const search = searchValue ? `search=${searchValue}&` : "";


  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${page}&${limit}&${type}${search}${sortBy}&${order}`;

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
  }, [typeName, sortManga, searchValue, currentPage]);

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
      {isLoading ? (
        ""
      ) : (
        <Pagination
          itemsPerPage = {8}
          totalItems = {15}
          paginate = {setCurrentPage}
          classes="col-start-6 col-end-8 flex gap-x-20 font-bold justify-center"
        />
      )}
    </div>
  );
};

export default MainPage;
