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
import CookiePolicy from "./features/cookiepolicy/pages/CookiePolicy"
import NotFoundPage from "./components/common/NotFoundPage"
import AdminDashboard from "./features/admin/pages/AdminDashboard"
import ContactSubmissions from "./features/admin/pages/ContactSubmissions"
import Reviews from "./features/admin/pages/Reviews"
import UserManagement from "./features/admin/pages/UserManagement"
import ProviderApproval from "./features/admin/pages/ProviderApproval"
import CategoryManagement from "./features/admin/pages/CategoryManagement"
import BookingMonitoring from "./features/admin/pages/BookingMonitoring"
import ProviderProfile from "./features/provider/pages/ProviderProfile"
import ActiveJobs from "./features/provider/pages/ActiveJobs"
import Earnings from "./features/provider/pages/Earnings"
import BookingRequests from "./features/provider/pages/BookingRequests"
import Availability from "./features/provider/pages/Availability"
import ProviderDashboard from "./features/provider/pages/ProviderDashboard"
import Dashboard from "./features/customer/pages/Dashboard"
import MyBookings from "./features/customer/pages/MyBookings"
import MyReviews from "./features/customer/pages/MyReviews"
import Profile from "./features/customer/pages/Profile"
import { Toaster } from "sonner"
import { ProtectedRoute, PublicRoute } from "./lib/ProtectedRoute"
import ServiceDetails from "./features/services/pages/ServiceDetails"
import LiveRequests from "./features/live-requests/pages/LiveRequests"
import { AboutUs } from "./features/aboutus/pages/AboutUs"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />

          <Route element={<HomeLayout />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetails />} />
            <Route path="live-requests" element={<LiveRequests />} />
            <Route path="about" element={<AboutUs/>} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="cookies" element={<CookiePolicy />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route path="admin/users" element={<UserManagement />} />
              <Route path="admin/approvals" element={<ProviderApproval />} />
              <Route path="admin/categories" element={<CategoryManagement />} />
              <Route path="admin/Bookings" element={<BookingMonitoring />} />
              <Route path="admin/reviews" element={<Reviews />} />
              <Route path="admin/contact" element={<ContactSubmissions />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["provider"]} />}>
            <Route element={<DashboardLayout />}>
              <Route
                path="provider/dashboard"
                element={<ProviderDashboard />}
              />
              <Route path="provider/availability" element={<Availability />} />
              <Route path="provider/requests" element={<BookingRequests />} />
              <Route path="provider/earnings" element={<Earnings />} />
              <Route path="provider/profile" element={<ProviderProfile />} />
              <Route path="provider/jobs" element={<ActiveJobs />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<MyBookings />} />
              <Route path="reviews" element={<MyReviews />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </>
  )
}

export default App
