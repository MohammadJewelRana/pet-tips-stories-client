import "@/styles/globals.css";
// import "../styles/globals.css"
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import clsx from "clsx";


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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "     font-sans antialiased",
          fontSans.variable
        )}
        // className="bg-[#191A1F]      "
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "" }}>
        
          {children}
          
        </Providers>
      </body>
    </html>
  );
}
