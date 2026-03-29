import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

import { TooltipProvider } from "@/components/ui/tooltip"

const DashboardLayout = () => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar />

        <SidebarInset>
          <Topbar />

          <main className="flex flex-1 flex-col p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default DashboardLayout
