import { FC } from "react";
import Contact from "./Contact";

const Footer: FC = () => {
  return (
    <div className={"flex justify-center h-full "}>
      <div className={"flex flex-col"}>
        <Contact />
      </div>
    </div>
  );
};

export default Footer;