import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboard/DashboardLayout"
import HomeLayout from "./layouts/home/HomeLayout"
import Home from "./features/home/pages/Home"
import Login from "./features/auth/pages/Login"
import Signup from "./features/auth/pages/Signup"
import Services from "./features/services/pages/Services"
import TermsOfService from "./features/termsofservice/pages/TermsOfService"
import PrivacyPolicy from "./features/privacypolicy/pages/PrivacyPolicy"
import CookiePolicy from "./features/cookiepolicy/pages/CookiePolicy"
import NotFoundPage from "./components/common/NotFoundPage"
import AdminDashboard from "./features/admin/pages/AdminDashboard"

import { Toaster } from "sonner"
import { ProtectedRoute, PublicRoute } from "./lib/ProtectedRoute"
import LiveRequests from "./features/live-requests/pages/LiveRequests"
import { AboutUs } from "./features/aboutus/pages/AboutUs"
import { Careers } from "./features/careers/pages/Careers"
import { Contact } from "./features/contact/pages/Contact"
import { ServiceDetails } from "./features/services/pages/ServiceDetails"
import AgentDashboard from "./features/agent/pages/AgentDashboard"
import Quotes from "./features/agent/pages/Quotes"
import RFQMarketPlace from "./features/agent/pages/RFQMarketPlace"
import CustomerDashboard from "./features/customer/pages/CustomerDashboard"
import CreateRFQ from "./features/customer/pages/CreateRFQ"
import RFQList from "./features/customer/pages/RFQList"
import RFQDetail from "./features/customer/pages/RFQDetail"
import QuoteComparison from "./features/customer/pages/QuoteComparison"
import AgentOrders from "./features/agent/pages/AgentOrders"
import Orders from "./features/customer/pages/Orders"
import OrderDetail from "./features/customer/pages/OrderDetail"
import ContactSubmissions from "./features/admin/pages/ContactSubmissions"
import Transactions from "./features/admin/pages/Transactions"
import UserManagement from "./features/admin/pages/UserManagement"


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
              <Route path="admin/contact" element={<ContactSubmissions />} />
              <Route path="admin/transactions" element={<Transactions />} />
              <Route path="admin/user-management" element={<UserManagement />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["agent"]} />}>
            <Route element={<DashboardLayout />}>
              <Route
                path="agent/dashboard"
                element={<AgentDashboard />}
              />
              <Route path="agent/orders" element={<AgentOrders />} />
              <Route path="agent/quotes" element={<Quotes />} />
              <Route path="agent/rfq-market" element={<RFQMarketPlace />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="customer/dashboard" element={<CustomerDashboard />} />
              <Route path="customer/create-rfq" element={<CreateRFQ />} />
              <Route path="customer/rfqs" element={<RFQList />} />
              <Route path="customer/rfqs/:id" element={<RFQDetail />} />
              <Route path="customer/compare/:id" element={<QuoteComparison />} />
              <Route path="customer/orders" element={<Orders />} />
              <Route path="customer/orders/:id" element={<OrderDetail />} />
            </Route>
          </Route>
        </Routes>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </>
  )
}

export default App
