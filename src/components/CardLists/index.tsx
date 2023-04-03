import { FC, useState, useEffect } from "react";
import Card from "./Card";
import Skeleton from "./CardSkeleton";


interface CardType {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
  type: string;
}

interface CardList {
  isLoading: boolean
  mangaList: Array<CardType>;
}

const CardList: FC = ({isLoading, mangaList}) => {
  const smallDisplay = "sm:grid-cols-1 sm:col-start-1 sm:col-end-12";
  const mediumDisplay = "md:grid-cols-3 md:col-end-13";
  const largeDisplay = "lg:grid-cols-4 lg:col-start-1 lg:col-end-9";

  return (
    <div
      className={`grid  gap-x-5 gap-y-10 items-stretch ${smallDisplay} ${mediumDisplay} ${largeDisplay}`}
    >
      {isLoading
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : mangaList.map((manga: CardType, i: number) => <Card {...manga} key={i} />)}
    </div>
  );
};

export default CardList;
