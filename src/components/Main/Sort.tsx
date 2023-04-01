import Select from "../../UI/Select";

const Sort = () => {
const elections= ["По рейтингу", "По алфавиту"]
  return (
    <Select classes={"col-start-11 col-end-13"} elections={elections}/>
  );
};

export default Sort;