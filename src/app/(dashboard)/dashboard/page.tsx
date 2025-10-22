import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { ChartPieLabel } from "@/components/dasboards/chart-pie-label"
import { ChartPieDonutText } from "@/components/dasboards/chart-pie-donut-text"
import { ChartPieInteractive } from "@/components/dasboards/chart-pie-interactive"
import { ChartBarLabelCustom } from "@/components/dasboards/chart-bar-label-custom"
import { ChartBarInteractive } from "@/components/dasboards/chart-bar-interactive"

export default function Page() {
  return (
     <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                <ChartPieLabel />
                 <ChartPieDonutText />
                  <ChartBarLabelCustom />
                   <ChartPieInteractive />
              </div>
              <div className="px-4 lg:px-6">
                <ChartBarInteractive/>
              </div>
              <SectionCards />

              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
  )
}
