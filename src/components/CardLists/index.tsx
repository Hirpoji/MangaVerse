import { FC } from "react";
import Card from "./Card";



const CardList: FC = () => {
  const array = [0, 1, 2, 3, 4];
  return (
    <div className="grid col-start-1 col-end-9 grid-cols-4 gap-x-5 gap-y-10">
      {array.map((number) => (
        <Card i={number} key={number} />
      ))}
    </div>
  );
};

export default CardList;