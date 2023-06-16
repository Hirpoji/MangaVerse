import { FC, useRef, useCallback, useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import debounce from "lodash.debounce";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

interface SearchProps {
  classes: string;
}

interface MangaList {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
  type: string;
}

const Search: FC<SearchProps> = ({ classes }) => {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const search = searchValue ? `search=${searchValue}&` : "";
  const dispatch = useDispatch();
  const [mangaList, setMangaList] = useState<MangaList[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchManga = () => {
    const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${search}`;
    axios.get(mangaListPath).then((res) => {
      setMangaList(res.data);
    });
  };

  useEffect(() => {
    fetchManga();
  }, [searchValue]);

  const filteredManga = mangaList.filter((manga) => {
    return manga.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (str: string) => {
    setValue(str);
    updateSearchValue(str);
  };

  return (
    <div className={`flex gap-x-5 relative ${classes}`}>
      <input
        ref={inputRef}
        type="text"
        id="search"
        name="search"
        placeholder="Найти лучшую мангу"
        className={`rounded-3xl  border  pt-[10px]  pl-[30px] pb-[10px] w-full focus:outline-none`}
        onChange={(event) => onChangeInput(event.target.value)}
        value={value}
      />
      {value && filteredManga.length !== 0 && (
        <ul className="absolute rounded-md p-2 left-0 top-12 w-full bg-white shadow-lg z-10 max-h-80 h-auto overflow-auto ">
          {filteredManga.map((item) => (
            <li
              key={item.name}
              className=" hover:bg-gray-100 cursor-pointer p-3 flex gap-x-5"
            >
              <img
                src={item.image}
                className=" h-[80px] overflow-hidden mb-1 w-auto"
              />
              <div className="flex  flex-col justify-between">
                <div className="flex  flex-col ">
                  <span className="font-bold">{item.name}</span>
                  <span>{item.otherName}</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <AiFillStar className="w-5 h-5 text-yellow-500" />
                  <div className="font-bold">{item.rating}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {searchValue && (
        <RxCross2
          className="w-5 h-5 opacity-30 right-5 top-[14px] absolute hover:opacity-100 z-5"
          onClick={onClickClear}
        />
      )}
    </div>
  );
};

export default Search;
