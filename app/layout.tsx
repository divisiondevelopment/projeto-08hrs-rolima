import type { Metadata } from "next";
import { Familjen_Grotesk, Karla } from "next/font/google";
import "./globals.css";
import { EVENT_SEO_DESCRIPTION } from "@/lib/event";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/layout/motion-provider";

const fontDisplay = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const fontBody = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "2º 08HRS de Rolimã",
  description: EVENT_SEO_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background pt-[76px] font-sans",
          fontDisplay.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionProvider>
            <Navbar />
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
