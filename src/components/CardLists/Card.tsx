import { FC, useState } from "react";
import AddIcon from "../../icons/AddIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import MarkIcon from "../../icons/MarkIcon";

interface CardType {
  manga: {
    id: number;
    image: string;
    name: string;
    otherName: string;
    rating: number;
    type: string;
  };
}

const Card: FC<CardType> = ({ manga }) => {
  const [add, setAdd] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    if (!showPopup) {
      setAdd(!add);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1800);
    }
  };

  return (
    <div className="flex flex-col gap-y-1 justify-between">
      <div>
        <img
          src={manga.image}
          className="w-full object-cover object-center h-[316px] overflow-hidden mb-5"
        />
        <h3 className="font-bold">{manga.name}</h3>
        <span className="mb-2">{manga.otherName}</span>
      </div>

      <div className="flex gap-y-1 flex-col ">
        
        <div className="flex justify-between items-center ">
          <div className="flex gap-x-2 items-center">
            <MarkIcon />
            <span className="font-inter font-bold text-base ">
              {manga.rating}
            </span>
          </div>
          <button className="bg-white" onClick={handleAddClick}>
            {add ? <AddIcon /> : <DeleteIcon />}
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <span className="font-bold">{`\"${manga.name}\"`}</span>{" "}
          {add ? "Удалено из избранного" : "Добавлено в избранное"}
        </div>
      )}
    </div>
  );
};

export default Card;
