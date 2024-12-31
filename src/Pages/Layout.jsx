import { Outlet } from "react-router"
import Head from "../Component/Head"
import Footer from "../Component/Footer"

const Layout = () => {
  return (
    <div>
        <Head />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout