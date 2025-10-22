import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';


const Root = () => {
    return (
      <div className="flex flex-col min-h-screen bg-[#f5f4f4]">
        <nav className="mx-auto w-full">
          <Navbar></Navbar>
        </nav>
        <main className="flex-grow w-full">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default Root;