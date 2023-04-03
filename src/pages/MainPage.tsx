import CardList from "../components/CardLists";
import Type from "../components/Main/Type";
import Sort from "../components/Main/Sort";
import { useState, useEffect } from "react";

interface Value {
  name: string;
  sortProperty: string;
}

function MainPage() {
  const [typeName, SetTypeName] = useState("Все");
  const [sortManga, setSortManga] = useState({
    name: "По рейтингу",
    sortProperty: "rating",
  });
  const [mangaList, setMangaList] = useState([]);
  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${
    typeName !== "Все" ? `type=${typeName}` : ""
  }&sortBy=${sortManga.sortProperty}${sortManga.sortProperty === "rating"? "&order=desc" : "&order=asc"}`;
  const [isLoading, setIsLoading] = useState(true);

  console.log(sortManga);
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
    <div className="grid gap-y-10 grid-cols-12">
      <Type
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
}

export default MainPage;
