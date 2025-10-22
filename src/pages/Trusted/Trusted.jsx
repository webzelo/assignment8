

const Trusted = () => {
  return (
    <div className="bg-gradient-to-r pb-10 from-[#632EE3] to-[#9F62F2]">
      <div className="w-11/12 mx-auto p-4 md:p-7 lg:p-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white text-center p-2 md: 4 lg:p-8">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around items-center text-white gap-5">
          <div className="flex flex-col justify-center items-center">
            <h4>Total Downloads</h4>
            <span className="text-3xl md:text-5xl lg:text-7xl font-bold p-1 md:p-3 lg:p-6">
              29.6 M
            </span>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4>Total Reviews</h4>
            <span className="text-3xl md:text-5xl lg:text-7xl font-bold p-1 md:p-3 lg:p-6">
              906 K
            </span>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4>Active Apps</h4>
            <span className="text-3xl md:text-5xl lg:text-7xl font-bold p-1 md:p-3 lg:p-6">
              132 +
            </span>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
