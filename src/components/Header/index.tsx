import { FC } from "react";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Header: FC = () => {
  return (
    <div className="mb-20">
      <div className="items-center grid grid-cols-12">
        <Logo />
        <Search classes={"col-start-4 col-end-9"} />
        <User />
      </div>
    </div>
  );
};

export default Header;
