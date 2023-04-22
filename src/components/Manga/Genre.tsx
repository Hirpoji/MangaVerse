import { FC, useState } from "react";

const Genre: FC = () => {
  const genres = ["Комедия", "Романтика", "Повседневность", "Сейсэн", "Школа"];
  return (
    <div className="flex col-start-6 col-end-11 flex-col gap-y-8">
      <h3 className="font-bold text-2xl">Жанры</h3>
      <div className="flex gap-x-5 flex-wrap gap-y-4">
        {genres.map((genere) => (
          <div className="border border-black rounded-3xl pl-4 pr-4 pt-1 pb-1">
            {genere}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
