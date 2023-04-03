import { FC } from "react";
import {Link} from "react-router-dom";

const Logo: FC = () => {
  const largeDisplay = "lg:block";
  const mediumDisplay = "md:hidden"
  return (
    <div className={`col-start-1 col-end-4 ${largeDisplay} ${mediumDisplay}`}>
      <Link to = "/" className="items-center gap-x-5 flex">
        <img src="../../src/assets/images/logo.png" />
        <span className="logo__text">MangaVerse</span>
      </Link>
    </div>
  );
};

export default Logo;
