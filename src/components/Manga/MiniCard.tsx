import { FC, useEffect, useState } from "react";
import axios from "axios";

const Related: FC = () => {
  const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga`;
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    axios.get(mangaListPath).then((res) => {
      setMangaList(res.data);
    });
  }, []);

  return (
    <div className="flex col-start-1 col-end-6 flex-col gap-y-8">
      {mangaList.map(({id, image, name, otherName, rating}) => (
        <div
          className="border border-black rounded-3xl pl-4 pr-4 pt-1 pb-1"
          key={id}
        >
          
        </div>
      ))}
    </div>
  );
};

export default Related;
