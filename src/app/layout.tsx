import "@/styles/globals.css";
// import "../styles/globals.css"
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";



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
        // className={clsx(
        //   "min-h-screen  bg-[#191A1F]   font-sans antialiased",
        //   fontSans.variable
        // )}
        className="bg-[#191A1F] h-screen z-10  "
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        
          {children}
          
        </Providers>
      </body>
    </html>
  );
}
