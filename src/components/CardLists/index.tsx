import { FC, useRef } from "react";
import Card from "./Card";
import Spinner from "../../UI/Spinner";

interface CardType {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
  type: string;
}

interface CardList {
  isLoading: boolean;
  mangaList: Array<CardType>;
  className?: string;
}

const CardList: FC<CardList> = ({ isLoading, mangaList, className }) => {
  const manga = mangaList.map((manga: CardType, i: number) => (
    <Card {...manga} key={i} />
  ));

  return isLoading ? (
    <div className={`col-start-6 col-end-8`}>
      <Spinner />
    </div>
  ) : (
    <div className={`grid gap-x-5 items-stretch mb-10 gap-y-10 ${className}`}>
      {manga}
    </div>
  );
};

export default CardList;
