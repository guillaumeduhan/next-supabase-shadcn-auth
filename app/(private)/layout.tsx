"use client";
import { AppSidebar } from "@/components/app-sidebar";
import Loading from "@/components/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { Toaster } from "sonner";
import AppWrapper from "./context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppWrapper>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <div className="px-6 py-4">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </div>
        <Toaster richColors />
      </SidebarProvider>
    </AppWrapper>
  );
}
