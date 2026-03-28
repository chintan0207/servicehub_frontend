import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboard/DashboardLayout"
import Dashboard from "./features/dashboard/pages/Dashboard"
import HomeLayout from "./layouts/home/HomeLayout"
import Home from "./features/home/pages/Home"
import Login from "./features/auth/pages/Login"
import Signup from "./features/auth/pages/Signup"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<HomeLayout />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
