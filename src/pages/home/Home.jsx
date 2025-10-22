import Banner from "../Banner/Banner";
import Trusted from "../Trusted/Trusted";
import TrendingApps from "../Apps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Trusted></Trusted>
      <TrendingApps data={data}></TrendingApps>
    </div>
  );
};

export default Home;
