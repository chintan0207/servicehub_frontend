import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginFormData } from "../schema/auth.schema"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Ship } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { useAuthStore } from "@/stores/useAuthStore"

const Login = () => {
  const { login } = useAuthStore()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    const success = await login(data.email, data.password)

    if (success) {
      const role = useAuthStore.getState().user?.role

      if (role === "provider") {
        navigate("/provider/dashboard")
      } else if (role === "admin") {
        navigate("/admin/dashboard")
      } else {
        navigate("/dashboard")
      }
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* LEFT SIDE */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="mb-8 flex items-center gap-2">
            <Ship className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">OUJAT</span>
          </Link>

          {/* Card */}
          <Card className="rounded-2xl shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input placeholder="you@company.com" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label>Password</Label>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password")}
                      className="pr-10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="text-sm text-destructive">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm text-muted-foreground">
                      Remember me
                    </span>
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              {/* Footer */}
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-primary to-primary/80 p-12 lg:flex">
        <div className="max-w-lg text-primary-foreground">
          <h2 className="mb-6 text-4xl font-bold">
            All logistics services, everywhere
          </h2>

          <p className="mb-8 text-lg opacity-90">
            Connect with verified logistics providers worldwide and manage all
            your shipments in one platform.
          </p>

          <div className="space-y-4">
            {[
              "Browse thousands of logistics services",
              "Post requests and receive competitive quotes",
              "Track shipments in real-time",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
