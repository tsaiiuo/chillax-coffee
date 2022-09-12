import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-20 object-contain cursor-pointer"
            src="https://i.ibb.co/BzfWJ5L/chillax-coffee-logo.jpg"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/info/about">
            <h3 className="hover:text-white hover:bg-amber-700 px-4 py-1 hover:rounded-full cursor-pointer">
              About
            </h3>
          </Link>
          <Link href="/info/menu">
            <h3 className="hover:text-white hover:bg-amber-700 px-4 py-1 hover:rounded-full cursor-pointer">
              Menu
            </h3>
          </Link>
          <Link href="/info/contact">
            <h3 className="text-white bg-amber-700 px-4 py-1 rounded-full cursor-pointer">
              Contact
            </h3>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <Link href="https://www.facebook.com/chillaxcoffee/">
          <h3 className="hover:text-white hover:bg-amber-700 px-4 py-1 hover:rounded-full text-amber-700 cursor-pointer">
            Facebook
          </h3>
        </Link>
        <Link href="https://www.instagram.com/chillaxcoffee_c25/">
          <h3 className="hover:text-white hover:bg-amber-700  hover:rounded-full  text-amber-700 border px-4 py-1 rounded-full border-amber-700 cursor-pointer">
            Instagram
          </h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
