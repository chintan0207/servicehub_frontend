import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAuthStore } from "@/stores/useAuthStore"
import { LayoutDashboard, LogOut, Menu, Ship, User } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuthStore()

  const getDashboardRoute = () => {
    switch (user?.role) {
      case "admin":
        return "/admin/dashboard"
      case "provider":
        return "/provider/dashboard"
      case "customer":
        return "/dashboard"
      default:
        return "/"
    }
  }
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Live Requests", href: "/live-requests" },

    // { label: "How it Works", href: "/#how-it-works" },
    // { label: "Become Provider", href: "/provider" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Ship className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">OUJAT</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Button */}
            <ThemeToggle />

            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-medium">
                    {user?.name}
                  </div>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {user?.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={getDashboardRoute()}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {isAuthenticated ? (
              <Button asChild className="hidden md:flex">
                <Link to={getDashboardRoute()}>Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild className="hidden md:flex">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="hidden md:flex">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            )}

            {/* Login Button (Desktop) */}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent className="p-4">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation
                </SheetDescription>

                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {isAuthenticated ? (
                    <>
                      <Button asChild className="w-full">
                        <Link to="/dashboard">Dashboard</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/login">Login</Link>
                      </Button>

                      <Button asChild className="w-full">
                        <Link to="/signup">Get Started</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
