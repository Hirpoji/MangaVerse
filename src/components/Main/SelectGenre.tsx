import { FC, useState } from "react";

const SelectGenre: FC = () => {
  const [selectedItem, setSelectedItem] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedItem(event.target.value);
  }

  return (
    <div className="border p-5 overflow-y-scroll h-64">
      <select value={selectedItem} onChange={handleChange}>
        <option value="">Выберите пункт</option>
        <option value="item1">Пункт 1</option>
        <option value="item2">Пункт 2</option>
        <option value="item3">Пункт 3</option>
      </select>
      <p>Выбранный пункт: {selectedItem}</p>
    </div>
  );
};

export default SelectGenre;
