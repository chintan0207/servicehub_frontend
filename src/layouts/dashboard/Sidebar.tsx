/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sidebar as SidebarRoot,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {  ChevronDown, Package, Globe } from "lucide-react"
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
 
  Mail,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

// import {
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
// } from "@/components/ui/collapsible"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/stores/useAuthStore"

// const getNavItems = (role: "customer" | "agent" | "admin") => {
//   switch (role) {
//     case "customer":
//       return [
//         {
//           name: "Dashboard",
//           href: "/dashboard",
//           icon: LayoutDashboard,
//         },
//         { name: "My Bookings", href: "/bookings", icon: Calendar },
//         { name: "My Reviews", href: "/reviews", icon: Star },
//         { name: "Profile", href: "/profile", icon: User },
//       ]
//     case "agent":
//       return [
//         {
//           name: "Dashboard",
//           href: "/provider/dashboard",
//           icon: LayoutDashboard,
//         },
//         {
//           name: "Booking Requests",
//           href: "/provider/requests",
//           icon: ClipboardList,
//         },
//         { name: "Active Jobs", href: "/provider/jobs", icon: CheckSquare },
//         { name: "Availability", href: "/provider/availability", icon: Clock },
//         { name: "Earnings", href: "/provider/earnings", icon: DollarSign },
//         { name: "Profile", href: "/provider/profile", icon: User },
//       ]
//     case "admin":
//       return [
//         { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
//         { name: "User Management", href: "/admin/users", icon: Users },
//         { name: "Provider Approval", href: "/admin/approvals", icon: Shield },
//         { name: "Categories", href: "/admin/categories", icon: FileText },
//         { name: "Bookings", href: "/admin/bookings", icon: Calendar },
//         { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
//         { name: "Contact Submissions", href: "/admin/contact", icon: Mail },
//       ]
//   }
// }
const getNavItems = (role: "customer" | "agent" | "admin") => {
  switch (role) {
    case "customer":
      return [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Create RFQ",
          href: "/create-rfq",
          icon: FileText,
        },
        {
          name: "My RFQs",
          href: "/rfqs",
          icon: ClipboardList,
        },
        {
          name: "Orders",
          href: "/orders",
          icon: Package,
        },
      ];

    case "agent":
      return [
        {
          name: "Dashboard",
          href: "/agent/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Orders",
          href: "/agent/orders",
          icon: Package,
        },
        {
          name: "Quotes",
          href: "/agent/quotes",
          icon: FileText,
        },
        {
          name: "RFQ Marketplace",
          href: "/agent/rfq-market",
          icon: Globe,
        },
      ];

    case "admin":
      return [
        {
          name: "Dashboard",
          href: "/admin/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Contact Submissions",
          href: "/admin/contact",
          icon: Mail,
        },
      ];
  }
};

const Sidebar = () => {
  const { user,logout } = useAuthStore()
  const mainMenu = getNavItems(user?.role as any)
  return (
    <SidebarRoot collapsible="icon">
      {/* HEADER */}
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="py-7 group-data-[collapsible=icon]:p-0"
            >
              {/* Logo */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  S
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-semibold">Oujat</span>
                <span className="text-xs text-muted-foreground">
                  {user?.role}
                </span>
              </div>

              <ChevronDown className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <Link to="/">
              <DropdownMenuItem>Oujat</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Create categories</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="p-3 group-data-[collapsible=icon]:p-1">
        <SidebarMenu>
          {mainMenu.map((item) => {
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.name}>
                <Link to={item.href}>
                  {" "}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton className="p-5 px-2">
                        <Icon />

                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.name}
                        </span>
                      </SidebarMenuButton>
                    </TooltipTrigger>

                    <TooltipContent
                      side="right"
                      className="hidden group-data-[collapsible=icon]:block"
                    >
                      {item.name}
                    </TooltipContent>
                  </Tooltip>{" "}
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        {/* MAIN MENU */}
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="py-7 group-data-[collapsible=icon]:p-0"
            >
              {" "}
              <img
                src="https://github.com/shadcn.png"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">{user?.name}</span>
                <span className="text-xs text-muted-foreground">
                  {user?.email}
                </span>
              </div>
              <ChevronDown className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" align="end">
            <DropdownMenuItem>Upgrade to Pro</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={logout} >Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </SidebarRoot>
  )
}

export default Sidebar
