import HeaderLi from "@/utils/HeaderLi";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-8">
      {/* <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={"yellow"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </svg>
      </div> */}

      <Link href="/" passHref legacyBehavior>
        <a className="text-orange-400 font-medium  text-xl sm:text-2xl">
          Çağatay Çalışkan
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-10 mr-2 sm:mr-6">
          <HeaderLi href="/about">ABOUT ME</HeaderLi>
          <HeaderLi href="/contact">CONTACT</HeaderLi>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
