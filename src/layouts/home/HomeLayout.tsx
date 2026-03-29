import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default HomeLayout
