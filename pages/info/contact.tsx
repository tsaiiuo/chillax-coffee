import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Chillax Coffee</title>
        <link
          rel="icon"
          href="https://scontent.ftpe7-3.fna.fbcdn.net/v/t31.18172-8/1073774_363750393752115_1254075240_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AKhzmQPL2PYAX8-A_zb&tn=3xhmME0mxLW-eLFb&_nc_ht=scontent.ftpe7-3.fna&oh=00_AT-1Qkj3HzdZX5nlpdQX-J5m2CpkXR1qLm9MuKdfbqmpIQ&oe=62E93292"
        />
      </Head>
      <Header />

      <div className="flex justify-between items-center bg-amber-700 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className=" decoration-black decoration-4">
              Chillax Coffee 騎樓咖啡
            </span>
          </h1>
          <h2 className="text-2xl ">
            若有任何疑問或合作意願，歡迎隨時聯絡我們：Ｄ
          </h2>

          <Link href="https://www.instagram.com/chillaxcoffee_c25/">
            <h2 className=" cursor-pointer text-2xl hover:text-white ">
              Instagram
            </h2>
          </Link>
          <Link href="https://www.facebook.com/chillaxcoffee/">
            <h2 className=" cursor-pointer text-2xl hover:text-white ">
              Facebook
            </h2>
          </Link>

          <h2>PHONE:02 8972 5530</h2>
        </div>
        <img
          className="hidden md:inline-flex h-44 lg:h-full w-96"
          src="https://i.ibb.co/ydKDH4P/chillax-coffee-main-5.jpg"
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
      <Footer></Footer>
    </div>
  );
}
