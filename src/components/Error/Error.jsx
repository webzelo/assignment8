import errorImg from "../../assets/error-404.png";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import { ArrowLeftFromLine } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="max-w-11/12 mx-auto w-full">
        <Navbar></Navbar>
      </nav>
      <main className="flex-grow w-full grid justify-center items-center">
        <img src={errorImg} alt="Error page img" />
        <div>
          <h2 className="text-4xl font-semibold text-center">
            Oops, page not found!
          </h2>
          <p className="text-center pt-10">
            The page you are looking for is not available.
          </p>
        </div>
        <Link to="/">
          <button className="block flex gap-2 items-center mx-auto text-2xl mt-10 font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:cursor-pointer p-4 rounded-lg">
            <ArrowLeftFromLine /> Back to Home
          </button>
        </Link>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Error;
