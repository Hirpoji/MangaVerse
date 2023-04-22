import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../src/routes";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import MangaPage from "./pages/MangaPage";

interface ISearchContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
  searchValue: "",
  setSearchValue: () => {},
});

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Router>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App mx-auto max-w-screen-xl mt-12 mb-12 pl-5 pr-5 relative">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-20">
              <Routes>
                {routes.map(({path, Component}) => (
                  <Route path={path} element={<Component/>} key={path} />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </SearchContext.Provider>
    </Router>
  );
}

export default App;
