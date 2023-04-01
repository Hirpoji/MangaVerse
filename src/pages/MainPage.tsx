import CardList from "../components/CardLists";
import Genere from "../components/Main/Genere";
import Sort from "../components/Main/Sort";

function MainPage() {
  return (
    <div className="grid gap-y-10 grid-cols-12">
      <Genere />
       <Sort/>
      <CardList />
    </div>
  );
}

export default MainPage;
