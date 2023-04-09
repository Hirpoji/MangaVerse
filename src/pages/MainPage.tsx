import SwitchButtons from "../UI/SwitchButtons";
import CardList from "../components/CardLists";
import Spinner from "../UI/Spinner";
import Sort from "../components/Main/Sort";
import { useState, useEffect } from "react";

interface Value {
  name: string;
  sortProperty: string;
}

const MainPage = () => {
  const buttonsList = ["Все", "Манга", "Манхва", "Маньхуа"];
  const [typeName, SetTypeName] = useState("Все");
  const [sortManga, setSortManga] = useState({
    name: "По рейтингу 10-1",
    sortProperty: "rating",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);

  const order = sortManga.sortProperty.includes("-") ? "desc" : "asc";
  const type = typeName !== "Все" ? `type=${typeName}` : "";
  const sortBy = sortManga.sortProperty.replace("-", "");

  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${type}&sortBy=${sortBy}${`&order=${order}`}`;

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
  }, [typeName, sortManga]);

  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5">
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
