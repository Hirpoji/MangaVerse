import { FC } from "react";
import Button from "../../UI/Button";
import { BiExit } from "react-icons/bi";

const UserInfo: FC = () => {
  return (
    <div className="col-start-1 col-end-3 flex flex-col items-start">
      <div className="flex flex-col items-center">
        <img
          src="../../../src/assets/images/user.png"
          className="w-full h-full rounded-full border-black border-[1px] object-cover mb-3"
        />
        <div className="text-20 font-bold mb-10">HipsterJo</div>
        <Button classes="text-white">
          <BiExit />
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
