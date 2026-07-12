import type { Metadata } from "next";
import "./globals.css";
import { TopNavbar } from "@/components/app-shell/top-navbar";
import { MobileNavigation } from "@/components/app-shell/mobile-navigation";

export const metadata: Metadata = {
  title: "LinkedOut — Professional networking, minus the theatre",
  description: "A satirical professional network with an AI-powered Humble-Brag Polygraph.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><TopNavbar />{children}<MobileNavigation /></body></html>;
}
