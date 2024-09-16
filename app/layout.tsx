import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Noto_Naskh_Arabic, Open_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import { navItems } from "@/lib/constants";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const noto_arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shifa Psychological Services",
  description: "Individual and family counseling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${merriweather.variable} ${noto_arabic.variable} antialiased`}>
      <body className={`font-open-sans bg-green-900 ${openSans.className}`}>
        <div className="container mx-auto min-h-screen flex flex-col bg-stone-50">
          <header className="relative">
            <Image
              src="/cropped-Valley-of-the-ten-peaks-banff-national-park1.jpg"
              alt="Mountain landscape with lake"
              width={1200}
              height={200}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 bg-green-900 flex items-center justify-between px-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src="/shifa-logo.png"
                  alt="Shifa Psychological Services logo"
                  width={300}
                  height={100}
                  className="max-h-16 sm:max-h-24 w-auto"
                />
                <p className="text-white text-xs sm:text-sm">
                  Individual and family counseling
                </p>
              </div>
            </div>
          </header>
          <nav className="bg-green-100 p-4 shadow-md">
            <div className="container mx-auto">
              <div className="md:hidden ">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="bg-stone-50 dark:bg-stone-900">
                    <nav className="flex flex-col space-y-4 ">
                      {navItems.map((item) => (
                        <Link
                          key={item}
                          href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="text-green-800 hover:text-green-600 transition-colors">
                          {item}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
              <ul className="hidden md:flex flex-wrap justify-center space-x-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-green-800 hover:text-green-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {children}
          <footer className="bg-green-100 p-4 text-center text-xs sm:text-sm text-green-800">
            <p>Copyright Shifa Psychological Services</p>
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
