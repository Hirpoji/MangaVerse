import { FC } from "react";
import { FiUpload } from "react-icons/fi";
import Button from "../../UI/Button";

const EditProfile: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 pl-6">
      <div className="flex gap-y-5 flex-col">
        <div>Имя пользователя</div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="HipsterJo"
          className={`rounded-3xl  border  pt-[8px]  pl-[30px] pb-[8px] w-fit`}
        />
      </div>

      <div className="flex gap-y-5 flex-col">
        <div>Изменить фото</div>
        <Button classes="text-white">
          <FiUpload />
          Загрузить
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
