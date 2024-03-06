import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const poppins = {
  fontFamily: "Poppins",
  fontWeight: "400",
  fontStyle: "normal",
  fontDisplay: "swap",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" className="mx-auto">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        className={cn(
          "bg-gradient-to-b  flex flex-col",
          `${poppins.fontFamily}`
        )}
        style={{
          backgroundImage: `url("/fundoDaAmanda.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <main className="h-full w-full">
          {children}
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}
