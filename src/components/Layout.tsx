import React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden w-full">
        <div className="flex-1 flex-col w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
