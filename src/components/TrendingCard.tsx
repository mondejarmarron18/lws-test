import calcRating from "../utils/calcRating";
import { FaStar } from "react-icons/fa";
import { FC } from "react";

type TProps = {
  anime: TAnime;
  className?: string;
};

const TrendingCard: FC<TProps> = ({ anime, className }) => {
  return (
    <div
      key={anime.id}
      className={`relative shrink-0 w-[400px] h-[230px] rounded-2xl cursor-pointer animate__zoom overflow-hidden ${className}`}
    >
      <img
        src={anime.image}
        alt={anime.title}
        className="zoom_child absolute h-full w-full object-cover "
      />
      <div className="relative bg-gradient-to-t from-black to-transparent h-full w-full gap-1 flex flex-col justify-end p-5">
        <div className="text-sm font-bold">{anime.title}</div>
        <div className="flex justify-between text-xs">
          <div className="text-gray-400">
            Category: {anime.categories.join(", ")}
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {calcRating(anime.likes, anime.dislikes)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
