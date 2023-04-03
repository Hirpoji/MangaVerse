import { FC } from "react";
import { Link } from "react-router-dom";

const smallDisplay = "md:md:hidden";
const mediumDisplay = "md:md:hidden";
const largeDisplay = "lg:block";

const User: FC = () => {
  return (
    <Link to="/user" className={`col-start-10 col-end-13 bg-transparent ${smallDisplay} ${mediumDisplay} ${largeDisplay}`}>
      <div className="flex items-center gap-x-4 justify-end">
        <span className="font-bold text-base">Анатолий</span>
        <img
          className="rounded-3xl border-2 w-10 h-10 border-black"
          src="../../src/assets/images/user.png"
          alt=""
        />
      </div>
    </Link>
  );
};

export default User;
