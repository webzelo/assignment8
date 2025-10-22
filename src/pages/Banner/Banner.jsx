import google from '../../assets/google-play.png';
import app from '../../assets/app-store.png'
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
      <div className="bg-[#f5f4f4]">
        <div className="w-11/12 mx-auto pt-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-bold p-4">
              We Build <br />
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>
              Apps
            </h2>
            <p className="text-center text-sm md:text-md text-gray-500">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:py-5 lg:py-8">
               <a className="flex justify-center items-center hover:text-white  hover:bg-[#9F62F2] rounded-xl p-2 border border-orange-300"
               href="https://play.google.com/store/apps"
              >
            <img
             src={google}
             alt="google play store logo"
             className="object-cover w-10 h-10"
             />
             <button className="font-semibold text-xl px-2">Google Play</button>
             </a>

            <a
               className="flex justify-center items-center rounded-xl p-2 hover:text-white hover:bg-[#9F62F2] border border-orange-300"
             href="https://www.apple.com/app-store/"
            >
            <img
             src={app}
             alt="app store logo"
             className="object-cover w-10 h-10"
           />
            <span className="font-semibold  text-xl px-2">App Store</span>
           </a>
           </div>            
          </div>
          <div className=" grid justify-center pt-4">
            <img src={hero} alt="banner hero img" />
          </div>
        </div>
      </div>
    );
};

export default Banner;