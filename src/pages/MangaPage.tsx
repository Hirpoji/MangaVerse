import { useState } from "react";
import Description from "../components/Manga/Description";
import Information from "../components/Manga/Information";
import SwitchButtons from "../UI/SwitchButtons";
import Title from "../components/Manga/Title";

function MangaPage() {
  const buttonsList = ["Информация", "Главы"];
  const [buttonName, SetButtonName] = useState("Информация");
  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5">
      <Information />
      <div className="flex flex-col col-start-3 col-end-13 gap-y-10">
        <Title />
        <Description />
      </div>
    </div>
  );
}

export default MangaPage;
