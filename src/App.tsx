import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../src/routes";
import Footer from "./components/Footer";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import MangaPage from "./pages/MangaPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App mx-auto max-w-screen-xl mt-12 mb-12 pl-5 pr-5 relative">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="flex-grow mb-20">
            <Routes>
              <Route
                path={"/"}
                element={
                  <MainPage
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                }
              />
              <Route path={"/not_found"} element={<NotFoundPage />} />
              <Route path={"/user"} element={<UserPage />} />
              <Route path={"/manga_page"} element={<MangaPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
