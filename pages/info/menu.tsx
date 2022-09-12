import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Head>
        <title>Chillax Coffee</title>
        <link
          rel="icon"
          href="https://scontent.ftpe7-3.fna.fbcdn.net/v/t31.18172-8/1073774_363750393752115_1254075240_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AKhzmQPL2PYAX8-A_zb&tn=3xhmME0mxLW-eLFb&_nc_ht=scontent.ftpe7-3.fna&oh=00_AT-1Qkj3HzdZX5nlpdQX-J5m2CpkXR1qLm9MuKdfbqmpIQ&oe=62E93292"
        />
      </Head>
      <Header />

      <div className="flex  flex-col  justify-center items-center py-10 ">
        <div className="text-3xl font-bold underline">Menu</div>
        <img
          className="my-10"
          src="https://i.ibb.co/P9dDfMv/chillax-coffee-menu.jpg"
          alt=""
        />
      </div>
      <Footer></Footer>
    </div>
  );
}
