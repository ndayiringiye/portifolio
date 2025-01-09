import {BrowserRouter,   Routes, Route} from "react-router";
import Head from './Component/Head'
import Home from './Component/Home'
import Contact from './Pages/Contact'
import About from "./Pages/About";

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes >
          <Route element={<Head />}>
          
          <Route path ="/" element={<Home />}/>
          <Route path ="/contact" element={<Contact />}/>
          <Route path ="/" element={<Contact />}/>
          <Route path ="https://www.facebook.com/" element={<Contact />}/>
          <Route path ="https://www.instagram.com/" element={<Contact />}/>
          <Route path ="https://www.linkedin.com/" element={<Contact />}/>
          <Route path ="https://www.whatsapp.com/" element={<Contact />}/>
          <Route path ="https://github.com/ndayiringiye" element={<Contact />}/>
          <Route path ="https://mail.google.com/mail/u/1/#inbox" element={<Contact />}/>
          <Route path ="https://www.x.com/" element={<Contact />}/>

         <Route path="/about" element={<About />} />






          </Route>
        </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App