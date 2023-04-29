import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../src/routes";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Router>
        <div className="App mx-auto max-w-screen-xl mt-12 mb-12 pl-5 pr-5 relative">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-20">
              <Routes>
                {routes.map(({ path, Component }) => (
                  <Route path={path} element={<Component />} key={path} />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
    </Router>
  );
}

export default App;
