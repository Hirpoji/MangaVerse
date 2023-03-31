import { FC, useState } from "react";
import AddIcon from "../../icons/AddIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import MarkIcon from "../../icons/MarkIcon";

interface CardType {
  i: number;
}

const Card: FC<CardType> = ({ i }) => {
  const [add, setAdd] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    if (!showPopup) {
      setAdd(!add);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };
  const name = "Берсерк";
  return (
    <div className="w-full">
      <img
        src={`../../../src/assets/images/manga/manga${i + 1}.jpg`}
        className="w-full object-cover object-center h-[316px] overflow-hidden mb-5"
      />
      <div className="flex gap-y-1 flex-col ">
        <h3 className="font-bold">{name}</h3>
        <span className="mb-2">Берсерк</span>
        <div className="flex justify-between items-center ">
          <div className="flex gap-x-2 items-center">
            <MarkIcon />
            <span className="font-inter font-bold text-base ">5,6</span>
          </div>
          <button className="bg-white" onClick={handleAddClick}>
            {add ? <AddIcon /> : <DeleteIcon />}
          </button>
          {showPopup && (
            <div className="popup">
              <span className="font-bold">{`\"${name}\"`}</span> {add ? "Удалено из избранного" : "Добавлено в избранное" }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
