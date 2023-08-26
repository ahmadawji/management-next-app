import "@/styles/global.css";
import { Inter } from "next/font/google";
// import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function DashboardRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center gap-4 p-5">
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
