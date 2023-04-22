import { FC, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { SearchContext } from "../../App";

interface SearchProps {
  classes: string;
}

const Search: FC<SearchProps> = ({ classes }) => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className={`flex gap-x-5 relative ${classes}`}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Найти лучшую мангу"
        className={`rounded-3xl  border  pt-[10px]  pl-[30px] pb-[10px] w-full focus:outline-none`}
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />
      {searchValue && (
        <RxCross2
          className="w-5 h-5 opacity-30 right-5 top-[14px] absolute hover:opacity-100 z-5"
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};

export default Search;
