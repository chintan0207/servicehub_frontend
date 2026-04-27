/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from "@/stores/useAuthStore"
import { Navigate, Outlet } from "react-router-dom"

type Props = {
  allowedRoles?: ("admin" | "agent" | "customer")[]
}

export const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { isAuthenticated, user } = useAuthStore()

  // ❌ Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // ❌ Role not allowed
  if (allowedRoles && !allowedRoles.includes(user?.role as any)) {
    return <Navigate to="/" replace />
  }

  // ✅ Allowed
  return <Outlet />
}

export const PublicRoute = () => {
  const { isAuthenticated, user } = useAuthStore()

  if (isAuthenticated) {
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" />
    if (user?.role === "provider") return <Navigate to="/provider/dashboard" />
    return <Navigate to="/dashboard" />
  }

  return <Outlet />
}
