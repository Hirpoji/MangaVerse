import { useState } from "react";
import Information from "../components/Manga/Information";
import Data from "../components/Manga/Data";
import Genre from "../components/Manga/Genre";

function MangaPage() {
  
  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5">
      <Data />
      <div className="flex flex-col col-start-3 col-end-13 gap-y-10">
        <Information />
      </div>
    </div>
  );
}

export default MangaPage;
