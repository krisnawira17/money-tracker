import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarTrigger,
} from "@/components/ui/sidebar";
import { ArrowRightLeft, Home, LogOut, User } from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/Profile",
    icon: User,
  },
  {
    title: "Transaction",
    url: "/Transaction",
    icon: ArrowRightLeft,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-between items-center align-middle">
        <h1 className="text-xl font-bold mt-4">FinMap</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton size={"lg"} asChild>
              <a href={item.url}>
                <item.icon />
                <span className="text-base">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton size={"lg"} asChild>
            <a href="#">
              <LogOut />
              <span>Log out</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
