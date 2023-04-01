import { FC } from "react";
import Button from "../../UI/Button";
import SearchIcon from "../../icons/SearchIcon";

interface SearchProps{
  classes: string;
}

const Search: FC<SearchProps> = ({classes}) => {
  return (
      <form className={`flex gap-x-5 ${classes}`}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Найти лучшую мангу"
          className={`bg-neutral-200 rounded-3xl border-none pt-[10px]  pl-[30px] pb-[10px] w-full `}
        />
        <Button onclick={()=>0}>
          <SearchIcon />
        </Button>
      </form>
  );
};

export default Search;
