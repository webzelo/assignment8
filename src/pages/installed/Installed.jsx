import React, { useEffect, useState } from "react";
import imgD from "../../assets/icon-downloads.png";
import imgRa from "../../assets/icon-ratings.png";
import imgRe from "../../assets/icon-review.png";
import AppError from "../../Components/Error/AppError";
import { toast } from "react-toastify";

const Installed = () => {
  const [Installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  const [showModal, setShowModal] = useState(false);//
  const [selectedId, setSelectedId] = useState(null);//

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("Installed"));
    if (saveList) setInstalled(saveList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "rating") {
      return [...Installed].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (sortOrder === "reviews") {
      return [...Installed].sort((a, b) => a.reviews - b.reviews);
    } else if (sortOrder === "size") {
      return [...Installed].sort((a, b) => a.downloads - b.downloads);
    } else {
      return Installed;
    }
  })();
 
  const handelRemove = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };
  const confirmRemove = () => {
    const localList = JSON.parse(localStorage.getItem("Installed")) || [];
    const updateList = localList.filter((p) => p.id !== selectedId);
    localStorage.setItem("Installed", JSON.stringify(updateList));
    setInstalled(updateList);
    setShowModal(false);
    setSelectedId(null);
    toast("❎ Uninstalled successfully!");
  };
  //

  return (
    <div className="bg-[#f5f4f4]">
      <div className="w-11/12 mx-auto">
        <div className="grid items-center p-4 w-full">
          <h2 className="text-black text-3xl font-bold text-center">
            Your Installed Apps
          </h2>
          <p className="text-gray-500 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 w-full gap-4 md:gap-0">
            <h2 className="text-black font-bold text-xl text-center md:text-left">
              ({Installed.length}) Apps Found
            </h2>
            <label className="form-control w-full max-w-xs justify-self-end">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by</option>
                <option value="size">Sort by size</option>
                <option value="rating">Sort by Rating</option>
                <option value="reviews">Sort by Review</option>
              </select>
            </label>
          </div>
        </div>
        {sortedItem.length !== 0 ? (
          sortedItem.map((id) => (
            <div className="grid gap-5" key={id}>
              <div className="flex justify-between items-center bg-[#ffffff] rounded-xl gap-4 md:m-4 ">
                <div className="flex md:p-4 ">
                  <img
                    className="h-20 md:h-35 lg:h-50 h-20 md:h-35 lg:w-50 rounded-xl object-cover"
                    src={id.image}
                    alt=""
                  />
                  <div className="block md:hidden font-semibold">
                    {id.title}
                  </div>
                  <div className="px-5 hidden md:block">
                    <h2 className="text-black text-4xl font-bold p-4">
                      SmPlan: {id.title}
                    </h2>

                    <div className="flex gap-6 md:gap-10 lg:gap-15 justify-around items-center p-4">
                      <div className="flex gap-2 items-center">
                        <img src={imgD} alt="" />
                        <span className="text-black text-xl font-bold">
                          {id.downloads}M
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img src={imgRa} alt="" />
                        <span className="text-black text-xl font-bold">
                          {id.ratingAvg}{" "}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <img src={imgRe} alt="" />
                        <span className="text-black text-xl font-bold items-center">
                          {id.reviews}K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handelRemove(id.id)}
                    className="btn m-4 bg-green-500 text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <AppError></AppError>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-40 z-50">
          <div className=" flex flex-col justify-center items-center gap-6 bg-white p-6 rounded-2xl shadow-lg text-center w-100 h-80">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Are you sure you want to uninstall?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmRemove}
                className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Installed;
