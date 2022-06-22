import Panel from "../components/Panel";
import animes from "../data/animes";
import { useEffect, useState } from "react";
import ThrowbackCard from "./ThrowbackCard";

const Throwback = () => {
  const [throwbackAnimes, setThrowbackAnimes] = useState<TAnime[]>([]);

  useEffect(() => {
    setThrowbackAnimes(animes.filter(({ released }) => released < 2005));
  }, []);

  return (
    <Panel className="bg-secondary md:pr-0 pr-0 ">
      <div className="text-white">
        <div className="font-bold text-2xl">Throwback Anime!</div>
        <div className="overflow-auto pb-5 scrollbar-thin hover:scrollbar-thumb-primary mt-4">
          <div className="flex gap-5">
            {throwbackAnimes.map((anime) => (
              <ThrowbackCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Throwback;
