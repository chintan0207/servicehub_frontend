import {
  Sidebar as SidebarRoot,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
  Grid,
  Folder,
  BookOpen,
  Settings,
  Clock,
  Map,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button"

/* ---------------- CONFIG ---------------- */

const workspace = {
  name: "ServiceHub",
  role: "Admin",
}

const platformMenus = [
  {
    title: "Playground",
    icon: Folder,
    children: ["History", "Starred", "Settings"],
  },
]

const mainMenu = [
  { title: "Models", icon: Folder },
  { title: "Documentation", icon: BookOpen },
  { title: "Settings", icon: Settings },
]

const projects = [
  { title: "Design Engineering", icon: Grid },
  { title: "Sales & Marketing", icon: Clock },
  { title: "Travel", icon: Map },
]

const user = {
  name: "Admin",
  email: "admin@servicehub.com",
  avatar: "https://github.com/shadcn.png",
}

/* ---------------- SIDEBAR ---------------- */

const Sidebar = () => {
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
                  {workspace.name.charAt(0)}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-semibold">{workspace.name}</span>
                <span className="text-xs text-muted-foreground">
                  {workspace.role}
                </span>
              </div>

              <ChevronDown className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuItem>{workspace.name}</DropdownMenuItem>
            <DropdownMenuItem>Create workspace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="p-3 group-data-[collapsible=icon]:p-1">
        {/* PLATFORM */}
        <div className="px-2 py-3 text-sm text-muted-foreground group-data-[collapsible=icon]:hidden">
          Platform
        </div>

        {platformMenus.map((menu) => {
          const Icon = menu.icon

          return (
            <Collapsible key={menu.title} className="group/collapsible">
              <SidebarMenu>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Icon />

                      <span className="group-data-[collapsible=icon]:hidden">
                        {menu.title}
                      </span>

                      <ChevronRight className="ml-auto transition-transform group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenu className="ml-6 border-l pl-4">
                      {menu.children.map((child) => (
                        <SidebarMenuItem key={child}>
                          <SidebarMenuButton>
                            <span className="group-data-[collapsible=icon]:hidden">
                              {child}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
          )
        })}

        {/* MAIN MENU */}
        <SidebarMenu className="mt-4">
          {mainMenu.map((item) => {
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton>
                      <Icon />

                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  </TooltipTrigger>

                  <TooltipContent
                    side="right"
                    className="hidden group-data-[collapsible=icon]:block"
                  >
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        {/* PROJECTS */}
        <div className="mt-6 px-2 py-2 text-sm text-muted-foreground group-data-[collapsible=icon]:hidden">
          Projects
        </div>

        <SidebarMenu>
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <SidebarMenuItem key={project.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton>
                      <Icon />

                      <span className="group-data-[collapsible=icon]:hidden">
                        {project.title}
                      </span>
                    </SidebarMenuButton>
                  </TooltipTrigger>

                  <TooltipContent
                    side="right"
                    className="hidden group-data-[collapsible=icon]:block"
                  >
                    {project.title}
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
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
              <img src={user.avatar} className="h-8 w-8 rounded-full" />
              <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">
                  {user.email}
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

            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </SidebarRoot>
  )
}

export default Sidebar
