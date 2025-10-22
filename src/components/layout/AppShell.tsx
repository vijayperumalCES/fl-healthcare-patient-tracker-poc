import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { SiteHeader } from "../site-header";
import { ReactNode } from "react";
import { Activity, Bell, Calendar, Dock, Home, PillBottle, Settings, User, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import { LogoutButton } from "@/app/logout";
import { ThemeModeToggle } from "../theme-switcher";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ===== Header ===== */}
      <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md border-b sticky top-0 z-50">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-md">
              HealthCare Patient Tracker
            </span>
          </div>

          {/* Horizontal Menu */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
            <a
              href="/dashboard"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Home className="w-4 h-4" /> Dashboard
            </a>
              <a
              href="/doctors"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Dock className="w-4 h-4" /> Doctors
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <User className="w-4 h-4" /> Patients
            </a>
            <a
              href="/medicine"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <PillBottle className="w-4 h-4" /> Medicines
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Activity className="w-4 h-4" /> Visits
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Calendar className="w-4 h-4" /> Schedules
            </a>
          </nav>
        </div>

        {/* Right Section: Notification + User Info + Logout */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>

          <ThemeModeToggle />

          {/* User Info */}
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-medium">Vijayperumal</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>

          {/* Avatar */}
          <Avatar className="w-9 h-9 border">
            <AvatarImage src="/user-avatar.jpg" alt="User" />
            <AvatarFallback>VP</AvatarFallback>
          </Avatar>

          {/* Logout */}
          <LogoutButton/>
        </div>
      </header>

       {children}
    </div>
    //  <SidebarProvider
    //   style={
    //     {
    //       "--sidebar-width": "calc(var(--spacing) * 72)",
    //       "--header-height": "calc(var(--spacing) * 12)",
    //     } as React.CSSProperties
    //   }
    // >
    //   <AppSidebar variant="inset" />
    //   <SidebarInset>
    //     <SiteHeader />
    //     <div className="flex flex-1 flex-col">
    //         {children}
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>
  );
}
