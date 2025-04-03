import { Routes, Route } from "react-router";
import Home from './Component/Home';
import Contact from './Pages/Contact';
import AboutUs from "./Pages/AboutuS";
import Layout from "./Pages/Layout";
import { useState } from "react";
import { globalModelContext } from "./contents/GlobalModelContext";
import Projects from "./Pages/Projects";

const App = () => {
  const [models, setModels] = useState("light");
  return (
    <globalModelContext.Provider value={{ models, setModels }}>
      <div className={models === "light" ? "light" : "dark"}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/project" element={<Projects />} />

          </Route>
        </Routes>
      </div>
    </globalModelContext.Provider>
  );
};

export default App;
