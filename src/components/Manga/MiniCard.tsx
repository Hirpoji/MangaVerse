import { FC } from "react";
import { Link } from "react-router-dom";

interface MiniCard {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
}

const MiniCard: FC<MiniCard> = ({ id, image, name, otherName, rating }) => {
  return (
    <Link to="/manga_page" className="grid grid-cols-5 gap-x-5 font-inter hover:text-red-600 opacity-100 hover:opacity-90">
      <img
        src={image}
        alt=""
        className="col-start-1 col-end-2 rounded-xl h-[125px] object-cover w-full"
      />
      <div className="flex flex-col col-start-2 col-end-6 justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="  text-lg font-bold">{name}</div>
          <div className=" text-m ">{otherName}</div>
          <div className="text-sm ">Продолжение</div>
        </div>
        <div className="text-sm ">Манга / 2015 год</div>
      </div>
    </Link>
  );
};

export default MiniCard;
