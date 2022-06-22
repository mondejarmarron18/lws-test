import Header from "./Header";
import animes from "../data/animes";
import Panel from "./Panel";
import { useEffect, useLayoutEffect, useState } from "react";
import Overview from "./Overview";
import ISAnime from "../initialStates/ISAnime";

const Hero = () => {
  const [anime, setAnime] = useState<TAnime>(animes[0] || ISAnime);

  useEffect(() => {
    let currentAnime = anime.id;

    setInterval(() => {
      setAnime(animes[currentAnime++]);

      if (!(currentAnime < animes.length)) currentAnime = 0;
    }, 5000);
  }, []);

  return (
    <div className="min-h-full h-full w-full">
      <img
        src={anime?.image}
        alt="Banner"
        className="object-cover fixed h-full w-full z-[-1]"
      />
      <div className="flex flex-col min-h-full bg-gradient-to-r from-black to-transparent">
        <Header />
        <Overview anime={anime} />
        <Panel className="flex flex-col-reverse gap-10 sm:flex-row justify-between items-center text-white text-xs bg-gradient-to-t from-black to-transparent">
          <div className="flex gap-5 items-start">
            <button className="flex flex-col items-center font-medium">
              Overview
              <div className="bg-primary w-9/12 h-1 mt-1 rounded-full"></div>
            </button>
            <button className="text-gray-500">Episodes</button>
            <button className="text-gray-500">Details</button>
          </div>
          <div className="flex gap-2">
            {animes.map((val) => (
              <div
                key={val.id}
                onClick={() => setAnime(val)}
                className={`cursor-pointer h-3 rounded-full transition-all ${
                  val.id === anime.id ? "bg-primary w-20" : "bg-white w-3"
                }`}
              />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Hero;
