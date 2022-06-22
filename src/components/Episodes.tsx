import { FC } from "react";
import EpisodeCard from "./EpisodeCard";

type TProps = {
  anime: TAnime;
};

const Episodes: FC<TProps> = ({ anime }) => {
  return (
    <div className="flex-1 max-w-[900px]">
      <div className="flex justify-between font-medium py-5">
        <div>Episodes</div>
        <div>Season 1</div>
      </div>

      <div className="flex flex-col gap-5">
        {[...Array(anime.episodes)].map((val, key) => (
          <EpisodeCard
            key={key}
            episode={key}
            image={anime.image}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit exercitationem ab minus odit quasi, vel nostrum aliquam rem qui a, modi aut tempore cumque?"
          />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
