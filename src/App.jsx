import {BrowserRouter,   Routes, Route} from "react-router";
import Head from './Component/Head'
import Home from './Component/Home'
import Contact from './Pages/Contact'
import Layout from "./Pages/Layout";

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes >
          <Route element={<Head />}>
          
          <Route path ="/" element={<Home />}/>
          <Route path ="/contact" element={<Contact />}/>
          </Route>
        </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App