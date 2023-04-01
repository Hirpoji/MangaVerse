import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-[1300px]">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
