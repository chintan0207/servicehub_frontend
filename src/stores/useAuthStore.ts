/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from "@/api/axios"
import { toast } from "sonner"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
  _id: string
  name: string
  email: string
  role: "customer" | "provider" | "admin"
  isVerified: boolean
}

type AuthState = {
  user: User | null
  accessToken: string | null

  isAuthenticated: boolean
  isLoading: boolean

  login: (email: string, password: string) => Promise<boolean>
  signup: (data: {
    name: string
    email: string
    password: string
    role: "customer" | "provider" | "admin"
  }) => Promise<boolean>

  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        try {
          set({ isLoading: true })

          const res = await ApiClient.post("/auth/login", {
            email,
            password,
          })

          const { user, accessToken } = res.data.data

          set({
            user,
            accessToken,
            isAuthenticated: true,
            isLoading: false,
          })
          toast.success("Login successful")
          return true
        } catch (error: any) {
          set({ isLoading: false })
          console.error("Login failed:", error)
          toast.error(error?.response?.data?.message || "Login failed")
          return false
        }
      },

      signup: async ({ name, email, password, role }) => {
        try {
          set({ isLoading: true })

          const res = await ApiClient.post("/auth/signup", {
            name,
            email,
            password,
            role,
          })

          const { user, accessToken } = res.data.data

          set({
            user,
            accessToken,
            isAuthenticated: true,
            isLoading: false,
          })
          toast.success("Account created successfully")
          return true
        } catch (error: any) {
          set({ isLoading: false })
          console.error("Signup failed:", error)
          toast.error(error?.response?.data?.message || "Signup failed")
          return false
        }
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
