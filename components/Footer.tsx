import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col p-5 max-w-7xl mx-auto ">
      <div className=" border border-b-slate-600 "></div>
      <div className="flex justify-between items-center mt-3">
        {" "}
        <h1 className="text-xl font-bold ">chillax coffee 騎樓咖啡</h1>
        <Link href="https://www.instagram.com/o.iantsai/">
          <h1 className="text-xl font-bold cursor-pointer">
            create by Iantsai
          </h1>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
