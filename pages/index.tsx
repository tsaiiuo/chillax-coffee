import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Chillax Coffee 騎樓咖啡</title>
        <link
          rel="icon"
          href="https://i.ibb.co/BzfWJ5L/chillax-coffee-logo.jpg"
        />
      </Head>
      <Header />

      {/* Section2*/}
      <div className="flex flex-col justify-start items-center bg-[url('https://i.ibb.co/7pNbZBc/chillax-coffee-main.jpg')] bg-cover h-100 py-10 lg:py-0">
        <h1 className="text-4xl sm:text-8xl font-serif text-white mt-44">
          <span className="underline ">Chillax Coffee</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl text-white mt-10">
          is a place to chill, read, and connect
        </h2>
        <Link href="https://www.google.com/maps/dir/25.0461031,121.5255809/25.05397,121.49254/@25.050722,121.4911107,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">
          <h2 className="text-xl sm:text-2xl cursor-pointer text-white hover:underline transform ease-in-out duration-200">
            241 New Taipei City 三重區三重區集美街207巷25號1樓
          </h2>
        </Link>
      </div>
      {/* Section2 */}
      <div className="flex justify-between items-center bg-amber-800 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className=" decoration-black decoration-4">
              Chillax Coffee 騎樓咖啡
            </span>
          </h1>
          <h2>一個悠閒的下午，一場意想不到的體驗</h2>
          <h2>一杯恰到好處的咖啡，一段有趣幽默的對談</h2>
          <h2>一個能默默的溫暖你一生，三重區集美街的一個小角落</h2>
        </div>
        <img
          className="hidden md:inline-flex h-44 lg:h-full w-96"
          src="https://i.ibb.co/rytH02s/chillax-coffee-main-3.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-between items-center bg-amber-600 border-y border-black py-10 lg:py-0">
        <img
          className="hidden md:inline-flex h-44 lg:h-full w-50"
          src="https://i.ibb.co/2PTws5H/chillax-coffee-main-2.jpg"
          alt=""
        />
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className="underline decoration-black decoration-4">
              Chillax Coffee
            </span>{" "}
            is a place to chill, read, and connect
          </h1>
          <h2>нave a good day :D</h2>
        </div>
      </div>
      <div className="flex justify-between items-center bg-amber-500 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className="underline decoration-black decoration-4">
              騎樓咖啡
            </span>{" "}
            is a place to relax, chat, and enjoy
          </h1>
          <h2>Chillax Coffee 騎樓咖啡 wish you нave a good day :D</h2>
        </div>
        <img
          className="hidden md:inline-flex h-44 lg:h-full w-50"
          src="https://i.ibb.co/2PTws5H/chillax-coffee-main-2.jpg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
