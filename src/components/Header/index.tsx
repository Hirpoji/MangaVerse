import { FC } from "react";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import { useState } from "react";

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="mb-20">
      <div className="items-center grid grid-cols-12">
        <Logo />
        <Search
          classes={"col-start-4 col-end-9"}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <User />
      </div>
    </div>
  );
};

export default Header;
