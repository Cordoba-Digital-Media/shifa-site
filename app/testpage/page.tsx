import Image from "next/image";

export default function Page() {
  return (
    <>
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
            <p className="text-2xl sm:text-4xl mb-2 font-notoarabic">
              السَّلَامُ عَلَى مَنِ اتَّبَعَ الْهُدَى
            </p>
            <p className="text-sm sm:text-base">
              Peace be upon he who follows the Guidance. (20:47)
            </p>
          </div>
        </div>
      </section>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-900 font-merriweather">
          Welcome to Shifa Psychological Services
        </h2>
      </main>
    </>
  );
}
