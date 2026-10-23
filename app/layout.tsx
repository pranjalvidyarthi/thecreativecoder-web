
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";


export const metadata: Metadata = {
  title: "The Creative Coder",
  description: "Creative development, web projects, and technology.",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
      
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}


  