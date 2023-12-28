import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="aspect-square w-12 shrink-0 fill-white bg-blue-900 rounded-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 4C9.384 4 4 9.384 4 16s5.384 12 12 12s12-5.384 12-12S22.616 4 16 4m0 2c5.535 0 10 4.465 10 10a9.977 9.977 0 0 1-8.512 9.879v-6.963h2.848l.447-2.893h-3.295v-1.58c0-1.2.395-2.267 1.518-2.267h1.805V9.652c-.317-.043-.988-.136-2.256-.136c-2.648 0-4.2 1.398-4.2 4.584v1.923h-2.722v2.893h2.722v6.938A9.975 9.975 0 0 1 6 16c0-5.535 4.465-10 10-10"></path>
  </svg>
);

export default function Header() {
  return (
    <header className="w-full bg-slate-800 grid grid-cols-12 h-14 fixed top-0">
      <div className="flex col-start-1 col-end-4 items-center">
        <Link href={"/"} className="rounded-full mx-2">
          <FacebookIcon />
        </Link>
        <SearchBar />
      </div>
      <Navbar />
      <div className="flex col-start-10 col-end-13 justify-end items-center">
        <Profile />
      </div>
    </header>
  );
}
