import { FC } from "react";
import Button from "../../UI/Button";
import {BiBookOpen} from "react-icons/bi"


const Data: FC = () => {
  return (
    <div className="flex flex-col col-start-1 col-end-3 gap-y-5">
      <img src="../../../src/assets/images/manga/manga1.jpg" alt="" />
      <Button onclick={() => ""} classes="flex text-white items-center gap-x-2"><BiBookOpen/>Начать читать</Button>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <span className="font-bold">Год релиза</span>
          <span className="">2007</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Статус тайтла</span>
          <span className="">Завершен</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Автор</span>
          <span className="">Kakifly</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Художник</span>
          <span className="">Kakifly</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Издательство</span>
          <span className="">Houbunsha Yen Press</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
