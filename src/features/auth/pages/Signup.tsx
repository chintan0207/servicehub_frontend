/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, type SignupFormData } from "../schema/auth.schema"
import { Link, useNavigate, useSearchParams } from "react-router"
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

const Signup = () => {
  const navigate = useNavigate()
  const { signup } = useAuthStore()

  const [searchParams] = useSearchParams()
  const type = searchParams.get("type")
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: type === "agent" ? "agent" : "customer",
    },
  })

  const role = watch("role")

  const onSubmit = async (data: SignupFormData) => {
    const success = await signup({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    })

    if (success) {
      navigate("/login")
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-background p-6">
        <div className="w-full max-w-md">
          {/* LOGO */}
          <Link to="/" className="mb-6 flex items-center gap-2">
            <Ship className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">OUJAT</span>
          </Link>

          {/* CARD */}
          <Card className="w-full p-5">
            <CardHeader className="items-center text-center">
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Join the global logistics network
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input {...register("name")} placeholder="John Doe" />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <Label>I want to</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={role === "customer" ? "default" : "outline"}
                      onClick={() => setValue("role", "customer")}
                      className="flex-1"
                    >
                      Customer
                    </Button>

                    <Button
                      type="button"
                      variant={role === "agent" ? "default" : "outline"}
                      onClick={() => setValue("role", "agent")}
                      className="flex-1"
                    >
                      Provider
                    </Button>
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label>Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
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

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("confirmPassword")}
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
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating..." : "Create Account"}
                </Button>
              </form>

              {/* Footer */}
              <p className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Sign in
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
            {role === "customer"
              ? "Access Global Logistics Providers"
              : "Grow Your Logistics Business"}
          </h2>

          <p className="mb-8 text-xl text-primary-foreground/80">
            {role === "customer"
              ? "Get competitive quotes and manage all your shipments in one place"
              : "Connect with customers worldwide and expand your business reach"}
          </p>

          <img
            src="https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
            alt="Logistics"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Signup
