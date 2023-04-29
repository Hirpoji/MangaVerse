import { FC, useState } from "react";

const Related: FC = () => {
  const genres = ["Комедия", "Романтика", "Повседневность", "Сейсэн", "Школа"];
  return (
    <div className="flex col-start-1 col-end-6 flex-col gap-y-8">
      <h3 className="font-bold text-2xl">Связнное</h3>
      <div className="flex gap-x-5 flex-wrap gap-y-4">
        {genres.map((genre) => (
          <div className="border border-black rounded-3xl pl-4 pr-4 pt-1 pb-1" key={genre}>
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;
