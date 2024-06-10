'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navbar } from "@/components/Navbar";
import { NavbarAdpative } from "@/components/navbar-adpative";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <NavbarAdpative />
        {children}
      </QueryClientProvider> 
      </body>
    </html>
  );
}
