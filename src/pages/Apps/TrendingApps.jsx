import { Download } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import useLoadApps from "../../Hooks/useLoadApps";
import Error from "../../Components/Error/Error";
import { PropagateLoader } from "react-spinners";

const TrendingApps = () => {
  const { Apps, loading, error } = useLoadApps();
  // console.log(Apps);
  const data = Apps.slice(0, 8);

  return (
    <div className="bg-[#f5f4f4]">
      <div className="w-11/12 mx-auto pt-8 pb-25">
        <h2 className="text-4xl font-bold p-4 text-center ">Trending Apps </h2>
        <p className="text-center pb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-64">
              <PropagateLoader color="#632EE3" size={15} />
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-10 text-red-500 font-bold">
              <Error />
            </div>
          ) : data && data.length > 0 ? (
            data.map((app, index) => (
              <Link key={index} to={`/details/${app.id}`}>
                <div className="hover:scale-105 shadow-sm transition ease-in-out duration-300">
                  <div className="bg-white m-4 p-4 rounded-2xl">
                    <img
                      className="sm:h-36 md:h-48 lg:h-60 xl:h-64 w-full rounded-2xl object-cover"
                      src={app.image}
                      alt="apps logo"
                    />
                    <h2 className="text-2xl py-4 font-semibold">{app.title}</h2>
                    <div className="flex justify-between items-center">
                      <span className="bg-[#F1F5E8] p-2 text-[#00D390] text-2xl rounded-xl flex justify-center items-center font-semibold gap-2">
                        <Download />
                        {app.downloads}M
                      </span>
                      <h2 className="text-[#FF8811] bg-[#FFF0E1] rounded-xl text-xl p-2 flex justify-center items-center font-semibold gap-2">
                        <FaStar />
                        {app.ratingAvg}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10 font-bold text-gray-500">
              No Apps Found
            </div>
          )}
        </div>

        <Link to="/apps">
          <button className="block mx-auto text-2xl mt-10 font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:cursor-pointer p-4 rounded-lg">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
