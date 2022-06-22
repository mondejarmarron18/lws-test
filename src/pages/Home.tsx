import Hero from "../components/Hero";
import Throwback from "../components/Throwback";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="h-full w-full scrollbar-thin scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary">
      <Hero />
      <Trending />
      <Throwback />
    </div>
  );
};

export default Home;
