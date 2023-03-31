import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="col-start-1 col-end-4">
      <div className="items-center gap-x-5 flex">
        <img src="../../src/assets/images/logo.png" />
        <span className="logo__text">MangaVerse</span>
      </div>
    </div>
  );
};

export default Logo;
