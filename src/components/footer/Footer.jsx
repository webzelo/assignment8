import twitterIcon from "../../assets/icon-twitter.png";
import linkedinIcon from "../../assets/icon-linkedin.png";
import facebookIcon from "../../assets/icon-facebook.png";


const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" max-w-11/12 mx-auto flex justify-between items-center">
        <div>
          <a className="flex" href="/">
            <img className="h-10" src="/logo.png" alt="logo" />
            <span className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:cursor-pointer ">
              HERO.IO
            </span>
          </a>
        </div>
        <div>
          <h2 className="text-white text-2xl font-semibold p-4">Social Links</h2>
          <div className="flex gap-7 p-4">
            <a href="https://x.com/NihadRaisul">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="h-6 w-6 bg-white rounded-full"
              />
            </a>
            <a href="https://www.linkedin.com/company/webzelo">
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/webzelo365">
              <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-md text-white p-4 grid items-center justify-center">
        Copyright © {new Date().getFullYear()} - All right reserved       
       </div>
    </div>
  );
};

export default Footer;
