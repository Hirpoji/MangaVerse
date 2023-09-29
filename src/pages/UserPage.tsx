import { FC, useEffect, useState } from "react";
import UserInfo from "../components/User/UserInfo";
import SelectCategoryUser from "../components/User/SelectCategoryUser";
import CardList from "../components/CardLists";
import axios from "axios";
import EditProfile from "../components/User/EditProfile";

const UserPage: FC = () => {
  const [value, setValue] = useState("Избранное");

  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga`;
    axios.get(mangaListPath).then((res) => {
      setMangaList(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="grid grid-cols-12 gap-x-5">
      <UserInfo />
      <div className="flex flex-col col-start-3 col-end-13 gap-y-10">
        <SelectCategoryUser value={value} setValue={setValue} />
        {value === "Избранное" ? (
          <CardList
            isLoading={isLoading}
            mangaList={mangaList}
            className={"grid-cols-5 col-start-1 col-end-12"}
          />
        ) : (
          <EditProfile/>
        )}
      </div>
    </div>
  );
};

export default UserPage;
