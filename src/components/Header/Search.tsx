import { FC, useContext, useRef, useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import debounce from "lodash.debounce";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import  {setSearchValue} from "../../redux/slices/searchSlice";


interface SearchProps {
  classes: string;s
}

const Search: FC<SearchProps> = ({ classes }) => {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const onClickClear = () => {
    dispatch(setSearchValue(""));
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
