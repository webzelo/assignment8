import React, { useState } from "react";
import { useParams } from "react-router";
import useLoadApps from "../../Hooks/useLoadApps";
import { toast } from "react-toastify";
import imgD from "../../assets/icon-downloads.png";
import imgRa from "../../assets/icon-ratings.png";
import imgRe from "../../assets/icon-review.png";
import Chart from "../Chart/Chart";
import Loader from "../../Components/Loader/loader";
import Error from "../../Components/Error/Error";

const Detalis = () => {
  const appData = useLoadApps();
  const { Apps, loading, error } = appData;
  //  console.log(Apps);
  const { id } = useParams();
  const singleApp = Apps.find((p) => String(p.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);
  if (loading) return <Loader></Loader>;
  if (error)  return <Error></Error>

  const {
    title,
    image,
    companyName,
    size,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    description,
  } = singleApp;

  const handelInstalled = () => {
    const localList = JSON.parse(localStorage.getItem("Installed"));
    let updateList = [];

    if (localList) {
      const isDuplicate = localList.some((p) => p.id === singleApp.id);
      if (isDuplicate) {
        return toast(`❌${title} already installed!`);
      }
      updateList = [...localList, singleApp];
    } else {
      updateList.push(singleApp);
    }
    setIsInstalled(true);
    localStorage.setItem("Installed", JSON.stringify(updateList));
    return toast(`✅${title} installed`);
  };

  return (
    <div className="bg-[#f5f4f4]">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#d3b07c21] p-4 rounded-xl gap-4 ">
          <img
            className="h-100 w-100 rounded-xl object-cover"
            src={image}
            alt="image"
          />
          <div className="px-5 md:col-span-2">
            <h2 className="text-gray-800 text-4xl font-bold p-4">SmPlan: {title}</h2>
            <p className="text-2xl text-gray-500 p-4">
              Developed by:{" "}
              <span className="text-[#632EE3] ">{companyName}</span>{" "}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-15 justify-center md:justify-around  items-center p-4">
              <div className="grid grid-cols-3 md:grid-cols-1 justify-center">
                <img src={imgD} alt="" />
                <p className="text-gray-800 text-xl p-2 md:block ">Downloads</p>
                <span className="text-black text-5xl font-bold">{downloads}M </span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-1  justify-center">
                <img src={imgRa} alt="" />
                <p className="text-gray-800 text-xl p-2  md:block">Average Ratings</p>
                <span className="text-black text-5xl font-bold">{ratingAvg} </span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-1  justify-center">
                <img src={imgRe} alt="" />
                <p className="text-gray-800 text-xl p-2  md:block">Total Reviews</p>
                <span className="text-black text-5xl font-bold">{reviews}K </span>
              </div>
            </div>
            <button
              onClick={handelInstalled}
              disabled={isInstalled}
              className={`bg-green-600 text-white py-3 px-5 rounded text-xl font-semibold transition-all duration-300 ${
                isInstalled
                  ? "cursor-not-allowed bg-green-600 disabled:bg-green-700 disabled:opacity-100"
                  : "cursor-pointer hover:bg-green-700"
              }`}
            >
              {isInstalled ? "Installed ✔" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-black text-2xl font-semibold p-6">Ratings</h2>
          <Chart ratings={ratings}></Chart>
          <div className="pb-10">
            <h2 className="text-black text-2xl font-semibold p-6">Description</h2>
            <p className="p-4  text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalis;
