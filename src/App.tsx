import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../src/routes"

function App() {
  return (
    <div className="App mx-auto max-w-screen-xl mt-12 mb-12 pl-5 pr-5 ">
      <Router>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
