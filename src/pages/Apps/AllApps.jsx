import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Download } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import AppError from "../../Components/Error/AppError";
import useLoadApps from "../../Hooks/useLoadApps";

const AllApps = () => {
  const appData = useLoadApps();
  const { Apps, loading, error } = appData;

  const [search, setSearch] = useState("");
  const trem = search.trim().toLocaleLowerCase();
  const searchApp = trem
    ? Apps.filter((app) =>
        app.title
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(search.toLowerCase().replace(/\s+/g, ""))
      )
    : Apps;
  return (
    <div className="bg-[#f5f4f4] min-h-screen">
      <div className="w-11/12 mx-auto py-8">
        <h2 className="text-4xl font-bold text-center p-4 text-black">
          Our All Applications
        </h2>
        <p className="text-gray-400 text-center pb-6">
          Explore all apps on the market developed by us. We code for millions.
        </p>
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 mb-6">
          <h2 className="font-bold text-xl text-black">
            Apps Found : ({searchApp.length})
          </h2>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-purple-400 input-control w-full max-w-xs text-black"
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <PropagateLoader color="#632EE3" size={15} />
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500 font-bold">
            <AppError />
          </div>
        ) : searchApp.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {searchApp.map((app, index) => (
              <Link key={index} to={`/details/${app.id}`}>
                <div className="bg-white m-4 p-4 rounded-2xl  hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md ease-in-out">
                  <img
                    className="sm:h-35 md:h-50 lg:h-60 xl:h-70 w-full rounded-2xl object-cover"
                    src={app.image}
                    alt="app logo"
                  />
                  <h2 className="text-2xl py-4 font-semibold text-gray-800">
                    {app.title}
                  </h2>

                  <div className="flex justify-between items-center">
                    <span className="bg-[#F1F5E8] px-4 py-2 text-[#00D390] text-xl rounded-xl flex items-center font-semibold gap-2">
                      <Download size={18} />
                      {app.downloads}M
                    </span>
                    <h2 className="text-[#FF8811] bg-[#FFF0E1] rounded-xl text-xl px-4 py-2 flex items-center font-semibold gap-2">
                      <FaStar />
                      {app.ratingAvg}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <AppError />
        )}
      </div>
    </div>
  );
};

export default AllApps;
