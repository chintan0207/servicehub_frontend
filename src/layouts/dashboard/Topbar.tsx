import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { Bell,Sun, Moon, User, Settings, LogOut } from "lucide-react"

import { Link } from "react-router-dom"

/* ---------------- DATA ---------------- */

const portal = {
  role: "Admin",
  user: {
    name: "John Doe",
    email: "john@example.com",
  },
}

const notifications = 3

const profileMenu = [
  { label: "Profile", icon: User, href: "/admin/profile" },
  { label: "Settings", icon: Settings },
]

/* ---------------- COMPONENT ---------------- */

const Topbar = () => {
  const initials = portal.user.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-2">
        {/* Desktop Sidebar Toggle */}
        <SidebarTrigger />

        {/* Portal Title */}
        <div className="flex-1">
          <h2 className="text-sm font-semibold lg:text-base">
            {portal.role} Portal
          </h2>

          <p className="hidden text-xs text-muted-foreground sm:block">
            Welcome back, {portal.user.name}
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />

            <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center p-0 text-xs">
              {notifications}
            </Badge>
          </Button>

          {/* Theme Button (UI only) */}
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5" />
            <Moon className="absolute h-5 w-5 opacity-0" />
          </Button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 py-5">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                <span className="hidden md:block">{portal.user.name}</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <div className="px-2 py-1.5 text-sm">
                <div className="font-medium">{portal.user.name}</div>

                <div className="text-xs text-muted-foreground">
                  {portal.user.email}
                </div>
              </div>

              <DropdownMenuSeparator />

              {profileMenu.map((item) => {
                const Icon = item.icon

                return (
                  <DropdownMenuItem key={item.label} asChild={!!item.href}>
                    {item.href ? (
                      <Link to={item.href}>
                        <Icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    ) : (
                      <div className="flex items-center">
                        <Icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </div>
                    )}
                  </DropdownMenuItem>
                )
              })}

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Topbar
