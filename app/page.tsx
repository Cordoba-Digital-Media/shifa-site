import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  const navItems = [
    "Home",
    "Meet Dr. Sadiq",
    "Workshops",
    "Training",
    "Lessons",
    "Advice & FAQ",
    "Articles",
    "Counseling Request",
    "Contact",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
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

      <section className="relative bg-[#0153AF]">
        <Image
          src="/bot-header.png"
          alt="Beach landscape"
          width={1200}
          height={200}
          className="w-full h-32 sm:h-56 object-contain sm:object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white bg-green-900 bg-opacity-70 p-4 rounded max-w-xs sm:max-w-sm md:max-w-md">
            <p className="text-lg sm:text-2xl mb-2 font-arabic">
              السَّلَامُ عَلَى مَنِ اتَّبَعَ الْهُدَى
            </p>
            <p className="text-sm sm:text-base">
              Peace be upon he who follows the Guidance. (20:47)
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            "Learning & Growing",
            "Life Coaching & Guidance",
            "Workshops, Seminars & Professional Training",
            "Counseling & Therapy",
          ].map((service) => (
            <div
              key={service}
              className="bg-green-50 p-4 rounded-lg shadow-md border border-green-200">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">
                {service}
              </h2>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-900">
          Welcome to Shifa Psychological Services
        </h2>
        <p className="mb-4 text-green-700 italic">
          home of holistic counseling
        </p>

        <div className="space-y-4 text-green-800 text-sm sm:text-base">
          <p>
            Welcome to Shifa Psychological Services – the home of holistic
            counseling and therapeutic services for men and women, boys and
            girls, young and old, single and married.
          </p>

          <p>
            This service is based in the beautiful northern hemisphere of the
            earth, in the city of Edmonton, Alberta, Canada. If you have some
            time, visit the{" "}
            <a href="#" className="text-green-600 hover:underline">
              picture gallery
            </a>{" "}
            to appreciate the beauty of this part of the world.
          </p>

          <p>
            Here you will find life coaching, cyber counseling and therapy,
            community and professional training workshops, on line webinars and
            small group counseling, frequently asked questions and answers, and
            some web lessons on personal growth as well as brief articles on
            psychological, emotional and spiritual issues.
          </p>

          <p>
            All services are geared towards facilitating meaningful changes in
            individuals and interpersonal relationships, as well as raising
            awareness of the communities about the rapidly increasing marital,
            family and youth issues and how to best handle them cohesively and
            meaningfully.
          </p>

          <p>
            Browse around, learn and grow, and enjoy your stay here. If you like
            anything, do let us know. If you dislike anything, let us know that
            too. Your constructive feedback is always welcome here as it would
            help us grow along with you.
          </p>
        </div>
      </main>

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
  );
}
