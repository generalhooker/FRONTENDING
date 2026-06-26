import {
  BarChart3,
  BookOpen,
  Database,
  FileText,
  GalleryVerticalEnd,
  Github,
  LayoutDashboard,
  MoreHorizontal,
  RefreshCcw,
  Settings,
  Settings2,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { Link, useLocation } from "wouter";

import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CommandMenu } from "@/components/dashboard/command-menu";

const navMain = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: RefreshCcw, label: "Lifecycle", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: FileText, label: "Projects", href: "#" },
  { icon: Users, label: "Team", href: "#" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const navDocuments = [
  { icon: Database, label: "Data Library" },
  { icon: BookOpen, label: "Reports" },
  { icon: Sparkles, label: "Word Assistant" },
  { icon: MoreHorizontal, label: "More" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Acme Inc.</span>
                    <span className="text-xs text-muted-foreground">Enterprise</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.href}
                      tooltip={item.label}
                    >
                      <Link to={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Documents</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navDocuments.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton tooltip={item.label}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarFallback className="rounded-lg bg-white"><User className="h-4 w-4 text-black" /></AvatarFallback>
                      <AvatarBadge className="bg-green-500 dark:bg-green-400 size-2 ring-sidebar" />
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Admin</span>
                      <span className="truncate text-xs text-muted-foreground">admin@acme.com</span>
                    </div>
                    <Settings2 className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarFallback className="rounded-lg bg-white"><User className="h-4 w-4 text-black" /></AvatarFallback>
                        <AvatarBadge className="bg-green-500 dark:bg-green-400 size-2" />
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Admin</span>
                        <span className="truncate text-xs text-muted-foreground">admin@acme.com</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Configurações</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Sair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {navMain.find((i) => i.href === location)?.label ?? "Dashboard"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CommandMenu />
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
