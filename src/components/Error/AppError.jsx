import { Link } from "react-router";
import imge from "../../assets/error-404.png";

const AppError = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center text-center p-6">
      <img
        src={imge}
        alt="App not found"
        className="w-72 md:w-96 drop-shadow-lg animate-bounce-slow"
      />
      <h2 className="text-4xl md:text-5xl font-extrabold mt-8 text-[#632EE3]">
        App Not Found
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-xl mt-4">
        The app you are looking for doesn’t exist in our system. Please check
        the name or try exploring other apps.
      </p>
      <Link to="/" className="mt-8">
        <button className="flex gap-2 items-center text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition-all duration-300 py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
  );
};

export default AppError;
