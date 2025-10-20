"use client"

import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"
import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function WorkspaceSwitcher({
  workspaces,
  defaultVersion,
}: {
  workspaces: string[]
  defaultVersion: string
}) {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState(defaultVersion)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-transparent focus:bg-white hover:bg-white transition duration-300 cursor-pointer border border-neutral-300">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground focus-visible:ring-0"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-6 items-center justify-center rounded">
                <GalleryVerticalEnd className="size-3" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="">{selectedWorkspace}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {workspaces.map((version) => (
              <DropdownMenuItem
                className="cursor-pointer"
                key={version}
                onSelect={() => setSelectedWorkspace(version)}
              >
                {version}{" "}
                {version === selectedWorkspace && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
