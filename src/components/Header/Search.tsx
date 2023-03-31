import { FC } from "react";
import Button from "../../UI/Button";
import SearchIcon from "../../icons/SearchIcon";

const Search: FC = () => {
  return (
    <div className="flex gap-x-5">
      <form className="flex gap-x-5">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Найти лучшую мангу"
          className="bg-neutral-200 rounded-3xl border-none pt-[10px] pr-[290px] pl-[30px] pb-[10px]"
        />
        <Button>
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default Search;
