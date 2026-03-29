import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboard/DashboardLayout"
import Dashboard from "./features/dashboard/pages/Dashboard"
import HomeLayout from "./layouts/home/HomeLayout"
import Home from "./features/home/pages/Home"
import Login from "./features/auth/pages/Login"
import Signup from "./features/auth/pages/Signup"
import Services from "./features/services/pages/Services"
import TermsOfService from "./features/termsofservice/pages/TermsOfService"
import Careers from "./features/careers/pages/Careers"
import PrivacyPolicy from "./features/privacypolicy/pages/PrivacyPolicy"
import Contact from "./features/contact/pages/Contact"
import AboutUs from "./features/aboutus/pages/AboutUs"
import CookiePolicy from "./features/cookiepolicy/pages/CookiePolicy"
import NotFoundPage from "./components/common/NotFoundPage"

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
            <Route path="services" element={<Services />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="cookies" element={<CookiePolicy />} />
            {/* Fallback route for unmatched paths */}
            <Route path="*" element={<NotFoundPage />} />
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
