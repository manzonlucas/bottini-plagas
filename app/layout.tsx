import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/app/config/site";
import { fontSans } from "@/app/config/fonts";
import { Navbar } from "@/app/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow mx-auto font-montserrat">
            {/* <main className="container flex-grow mx-auto max-w-7xl font-montserrat"></main> */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
