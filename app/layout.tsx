import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sai Blog",
  description: "Blogs with 💙 by Sai",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewPort: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <SiteHeader />
          <div className="relative flex min-h-dvh flex-col bg-background">
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
