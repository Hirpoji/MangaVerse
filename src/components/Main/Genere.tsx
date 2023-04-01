import { useState } from "react";
import Button from "../../UI/Button";

const genereList = ["Все", "Манга", "Манхва", "Манхуа"];

const Genere = () => {
  let [activeGenere, setActiveGenere] = useState(0);


  return (
    <div>
      <div className="flex items-center gap-30">
        <div className="flex gap-x-5">
          {genereList.map((genere, index) => {
            return (
              <Button
                children={genere}
                key={index}
                classes={activeGenere === index ? "bg-black text-white" : "bg-white text-black"}
                onclick={()=>setActiveGenere(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Genere;