import Select from "../UI/Select";
import CardList from "../components/CardLists";
import Genere from "../components/Main/Genere";

function MainPage() {
  return (
    <div className="grid gap-y-10 grid-cols-12">
      <Genere />
      <Select  classes={"col-start-11 col-end-13"}/>
      <CardList />
    </div>
  );
}

export default MainPage;
