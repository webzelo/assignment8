import { Link, useLocation } from "react-router";
import { House } from "lucide-react";
import { FaAppStoreIos } from "react-icons/fa6";


const Navbar = () => {
  const location = useLocation();
  const Links = (
    <>
      <Link to="/">
        <li
          className={`m-2 hover:underline ${
            location.pathname === "/"
              ? "text-[#9F62F2] underline font-bold"
              : "text-[#9F62F2]"
          }`}
        >
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li
          className={`m-2 hover:underline ${
            location.pathname === "/apps"
              ? "text-[#000000] underline font-bold"
              : "text-[#9F62F2]"
          }`}
        > 
          Apps
        </li>
      </Link>
      <Link to="/installation">
        <li
          className={`m-2 hover:underline ${
            location.pathname === "/installation"
              ? "text-[#000000] underline font-bold"
              : "text-[#9F62F2]"
          }`}
        >
          Installation
        </li>
      </Link>
    </>
  );

  return (
    <div className="bg-[#f5f4f4] ">
      <div className="navbar  max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-xl menu-sm dropdown-content bg-base-900 bg-gray-300 rounded-box z-1 mt-3 w-52 p-2 shadow hover:cursor-pointer font-bold"
            >
              {Links}
            </ul>
          </div>
          <div>
            <a className="flex" href="/">
              <img className="h-10" src="/logo.png" alt="logo" />
              <span className="btn btn-ghost text-xl p-0 md:p-2 lg:p-4 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:cursor-pointer ">
                HERO.IO 
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl menu-horizontal px-1 hover:cursor-pointer font-bold">
            {Links}
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/webzelo"
            className="flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 hover:cursor-pointer"
          >
            <img className="h-6" src="/git-hub.webp" alt="git-hub logo" />
            <span className="font-bold text-lg md:text-xl lg:text-2xl text-white">
              Contribute
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
