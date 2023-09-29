import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addManga, removeManga } from "../../redux/slices/SelectedMangaSlice";

interface CardType {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
}

const Card: FC<CardType> = ({ id, image, name, otherName, rating }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    handleAddClick();
    const item = {
      id,
      image,
      name,
      otherName,
      rating,
    };

    const mangaList = useSelector(
      (state: RootState) => state.selectedManga.items
    );
    
    console.log(1);

    mangaList.includes(item)
      ? dispatch(removeManga(item))
      : dispatch(addManga(item));
  };

  const [add, setAdd] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = useSelector((state: RootState) => state.scroll.isVisible);

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
    <>
      <div className="flex flex-col gap-y-1 justify-between hover:text-red-600 opacity-100 hover:opacity-90 z-1">
        <Link to="/manga_page" className=" gap-y-2 flex flex-col">
          <img
            src={image}
            className="w-full object-cover object-center h-[316px] overflow-hidden mb-1 rounded-xl"
          />
          <h3>{name}</h3>
        </Link>

        <div className="flex flex-col">
          <div className="flex justify-between items-center ">
            <div className="flex gap-x-2 items-center">
              <AiFillStar className="w-5 h-5 text-yellow-500" />
              <span className="font-bold">{rating}</span>
            </div>
            <button className="bg-white z-2" onClick={onClickAdd}>
              {add ? (
                <AiOutlineHeart className="w-5 h-5 text-gray-500 hover:text-black" />
              ) : (
                <AiFillHeart className="w-5 h-5 text-red-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={`popup z-10 ${scroll ? "bottom-[70px]" : "bottom-0"}`}>
          <span className="font-bold">{`\"${name}\"`}</span>{" "}
          {add ? "Удалено из избранного" : "Добавлено в избранное"}
        </div>
      )}
    </>
  );
};

export default Card;
