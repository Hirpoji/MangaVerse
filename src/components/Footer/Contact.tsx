import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram, BsFacebook } from "react-icons/bs";

const Contact: FC = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-y-5 `}>
      <span className="font-bold text-lg">Контакты</span>
      <div className={`flex gap-x-10 items-center`}>
        <a href="https://github.com/Hirpoji">
          <AiFillGithub className="w-7 h-7" />
        </a>
        <a href="https://web.telegram.org">
          <BsTelegram className="w-6 h-6" />
        </a>
        <a href="https://ru-ru.facebook.com">
          <BsFacebook className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
