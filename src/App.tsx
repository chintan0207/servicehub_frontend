import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboard/DashboardLayout"
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
import AdminDashboard from "./features/admin/pages/AdminDashboard"
import ContactSubmissions from "./features/admin/pages/ContactSubmissions"
import Reviews from "./features/admin/pages/Reviews"
import UserManagement from "./features/admin/pages/UserManagement"
import ProviderApproval from "./features/admin/pages/ProviderApproval"
import CategoryManagement from "./features/admin/pages/CategoryManagement"
import BookingMonitoring from "./features/admin/pages/BookingMonitoring"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />

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
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/users" element={<UserManagement />} />
            <Route path="admin/approvals" element={<ProviderApproval />} />
            <Route path="admin/categories" element={<CategoryManagement />} />
            <Route path="admin/Bookings" element={<BookingMonitoring />} />
            <Route path="admin/reviews" element={<Reviews />} />
            <Route path="admin/contact" element={<ContactSubmissions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
