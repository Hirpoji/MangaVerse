import { SetStateAction, useState } from "react";
import Button from "../../UI/Button";

const genereList = ["Все", "Манга", "Манхва", "Манхуа"];

const Genere = () => {
  let [activeGenere, setActiveGenere] = useState(0);

  const OnClickGenere = (genere: number) => {
    setActiveGenere(genere);
  };

  return (
    <div>
      <div className="flex items-center gap-30">
        <div className="flex gap-x-5">
          {genereList.map((genere, index) => {
            const isActive = activeGenere === index;
            return (
              <Button
                children={genere}
                key={genere}
                classes={isActive ? "bg-black text-white" : "bg-white text-black"}
                onclick={() => OnClickGenere(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Genere;