import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex w-full flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default HomeLayout
