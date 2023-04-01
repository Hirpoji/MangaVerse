import { FC, useState, useEffect } from "react";
import Card from "./Card";
import Skeleton from "./CardSkeleton";

const CardList: FC = () => {
  const [mangaList, setMangaList] = useState([]);
  const mangaListPath = "https://6428251e46fd35eb7c4c869f.mockapi.io/manga";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(mangaListPath)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setMangaList(arr);
        setIsLoading(false);
      });
  });

  return (
    <div className="grid col-start-1 col-end-9 grid-cols-4 gap-x-5 gap-y-10 items-stretch">
      {isLoading
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : mangaList.map((manga) => <Card {...{ manga }} key={manga} />)}
    </div>
  );
};

export default CardList;