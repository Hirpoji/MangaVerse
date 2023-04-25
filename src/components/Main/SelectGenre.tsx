import { FC, useState } from "react";
import { BiSquareRounded } from "react-icons/bi";
import { TbSquareRoundedFilled } from "react-icons/tb";

const SelectGenre: FC = () => {
  const menuItems = [
    { id: 1, label: "Сенен" },
    { id: 2, label: "Романтика" },
    { id: 3, label: "Комедия" },
    { id: 4, label: "Фэнтези" },
    { id: 1, label: "Сенен" },
    { id: 2, label: "Романтика" },
    { id: 3, label: "Комедия" },
    { id: 4, label: "Фэнтези" },
    { id: 1, label: "Сенен" },
    { id: 2, label: "Романтика" },
    { id: 3, label: "Комедия" },
    { id: 4, label: "Фэнтези" },
    { id: 1, label: "Сенен" },
    { id: 2, label: "Романтика" },
    { id: 3, label: "Комедия" },
    { id: 4, label: "Фэнтези" },
    { id: 1, label: "Сенен" },
    { id: 2, label: "Романтика" },
    { id: 3, label: "Комедия" },
    { id: 4, label: "Фэнтези" },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div className="border overflow-y-scroll h-64 flex flex-col p-3">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`pb-1 pt-1 flex bg-white items-center gap-x-2  pl-2 hover:bg-gray-200`}
          onClick={() => handleItemClick(item.id)}
        >
          {selectedItems.includes(item.id) ? (
            <BiSquareRounded />
          ) : (
            <TbSquareRoundedFilled />
          )}

          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SelectGenre;
