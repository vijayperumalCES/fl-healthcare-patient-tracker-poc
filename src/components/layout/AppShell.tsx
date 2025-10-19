import React from 'react';
import { SidebarInset, SidebarProvider } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';
import { SiteHeader } from '../site-header';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
     <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
