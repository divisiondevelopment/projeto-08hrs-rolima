import type { Metadata } from "next";
import { Familjen_Grotesk, Karla } from "next/font/google";
import "./globals.css";
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
  title: "1º 08HRS de Rolimã",
  description:
    "Corrida de carrinho de rolimã beneficente em Esteio/RS, no dia 18/10/2026, das 10h às 18h.",
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
          enableSystem
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
