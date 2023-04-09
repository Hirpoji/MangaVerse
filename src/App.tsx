import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../src/routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App mx-auto max-w-screen-xl mt-12 mb-12 pl-5 pr-5 relative">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
          </Routes>
          <div className="flex-grow"></div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;