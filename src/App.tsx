import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="content__container">
            <MainPage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
