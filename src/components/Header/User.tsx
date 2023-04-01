import  { FC } from "react";

const User: FC = () => {
  return (
    <button className="col-start-10 col-end-13 bg-transparent">
      <div className="flex items-center gap-x-4 justify-end">
        <span className="font-bold text-base">Анатолий</span>
        <img
          className="rounded-3xl border-2 w-10 h-10 border-black"
          src="../../src/assets/images/user.png"
          alt=""
        />
      </div>
    </button>
  );
};

export default User;
