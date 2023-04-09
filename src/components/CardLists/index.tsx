import { FC } from "react";
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
}

const CardList: FC<CardList> = ({ isLoading, mangaList }) => {
  const smallDisplay = "sm:grid-cols-1 sm:col-start-1 sm:col-end-12";
  const mediumDisplay = "md:grid-cols-3 md:col-end-11 md:col-start-1";
  const largeDisplay = "lg:grid-cols-4 lg:col-start-1 lg:col-end-9 lg:gap-y-10";

  const spinner = <Spinner />;
  const manga = mangaList.map((manga: CardType, i: number) => (
    <Card {...manga} key={i} />
  ));

  return isLoading ? (
    <div className={`col-start-6 col-end-8`}>
      <Spinner />
    </div>
  ) : (
    <div
      className={`grid gap-x-5 items-stretch ${smallDisplay} ${mediumDisplay} ${largeDisplay}`}
    >
      {manga}
    </div>
  );
};

export default CardList;
