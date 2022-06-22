import { Link } from "react-router-dom";
import Panel from "../components/Panel";
import animes from "../data/animes";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <Panel className="bg-secondary md:pr-0 pr-0 ">
      <div className="text-white">
        <div className="font-bold text-2xl">
          Trending <span className="text-yellow-500">this week</span>
        </div>
        <div className="overflow-y-hidden pb-5 scrollbar-thin hover:scrollbar-thumb-primary mt-4">
          <div className="flex gap-5">
            {animes.slice(0, 4).map((anime) => (
              <Link to={`/watch/${anime.id}`} key={anime.id}>
                <TrendingCard anime={anime} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Trending;
