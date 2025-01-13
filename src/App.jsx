import { BrowserRouter, Routes, Route } from "react-router";
import Head from './Component/Head'
import Home from './Component/Home'
import Contact from './Pages/Contact'
import AboutUs from "./Pages/AboutuS";
import Layout from "./Pages/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App