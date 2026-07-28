import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollRail } from "@/components/ui/scroll-rail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Tanvir Kabir Akon | Portfolio",
  description: "Computer Science Student & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-body`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <ScrollRail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
