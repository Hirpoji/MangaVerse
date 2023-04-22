import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner: FC = () => (
  <div className="flex justify-center pt-20">
    <ClipLoader
      color="#000"
      size={120}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

export default Spinner;
