import { FC, useEffect, useState } from "react";
import axios from "axios";
import MiniCard from "./MiniCard";

const mangaList = [
  {
    id: 0,
    image: "../../src/assets/images/manga/manga1.jpg",
    name: "Клинок, рассекающий демонов",
    otherName: "Kimetsu no Yaiba",
    rating: 9.1,
    type: "манга",
  },
  {
    id: 1,
    image: "../../src/assets/images/manga/manga2.jpg",
    name: "Kimetsu no Yaiba",
    otherName: "Bungou Stray Dogs",
    rating: 8.2,
    type: "манга",
  },
  {
    id: 2,
    image: "../../src/assets/images/manga/manga3.jpg",
    name: "Ван Пис",
    otherName: "One Piece",
    rating: 8.53,
    type: "манга",
  },
];

const MiniCardsList: FC = () => {
  return (
    <div className="flex col-start-1 col-end-3 flex-col gap-y-6">
      {mangaList.map(({ id, image, name, otherName, rating }) => (
        <MiniCard
          id={id}
          image={image}
          name={name}
          otherName={otherName}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default MiniCardsList;
