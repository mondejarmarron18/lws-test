import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Episodes from "../components/Episodes";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import TrendingCard from "../components/TrendingCard";
import animes from "../data/animes";
import ISAnime from "../initialStates/ISAnime";

const Watch = () => {
  const { animeID } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState<TAnime>(ISAnime);

  useEffect(() => {
    const data = animes.find(({ id }) => id === parseInt(animeID as string));

    if (!data) return navigate("/notFound");

    setAnime(data);
  }, [animeID]);

  return (
    <div className="h-full w-full scrollbar-thin scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary">
      <Hero />

      <Panel className="bg-secondary">
        <div className="text-white font-bold text-2xl">
          Trending <span className="text-yellow-500">this week</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 text-white">
          <div className="mt-4 w-full lg:w-[400px] flex flex-col gap-5">
            <TrendingCard anime={anime} className="w-full h-[300px]" />
            <div className="text-sm w-full text-gray-400">
              {anime.description}
            </div>
          </div>
          <Episodes anime={anime} />
        </div>
      </Panel>
    </div>
  );
};

export default Watch;
