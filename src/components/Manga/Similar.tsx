import { FC, useState } from "react";
import MiniCardsList from "./MiniCardsList";

const Similar: FC = () => {
  return (
    <div className="flex col-start-6 col-end-11 flex-col gap-y-8">
      <h3 className="font-bold text-2xl">Похожие</h3>
      <div className="flex gap-x-5 flex-wrap gap-y-4">
        <MiniCardsList />
      </div>
    </div>
  );
};

export default Similar;
