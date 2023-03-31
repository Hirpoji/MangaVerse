import { FC } from "react";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Header: FC = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="items-center grid grid-cols-12">
        <Logo />
        <Search />
        <User />
      </div>
    </div>
  );
};

export default Header;
