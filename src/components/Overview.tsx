import calcRating from "../utils/calcRating";
import Panel from "./Panel";
import { FaStar, FaPlay, FaHeart } from "react-icons/fa";
import { FC } from "react";
import { Link } from "react-router-dom";

type TProps = {
  anime: TAnime;
};

const Overview: FC<TProps> = ({ anime }) => {
  return (
    <Panel className="flex-1 text-white flex gap-4 flex-col justify-center">
      <div className="font-bold text-4xl md:text-6xl">{anime?.title}</div>
      <div className="flex flex-wrap gap-10 items-center font-medium">
        <div className="flex text-sm gap-1 items-center">
          <FaStar className="text-yellow-500" />
          {calcRating(anime?.likes, anime?.dislikes)}
        </div>
        <div className="text-xs">
          <span className="mr-2">Category:</span>
          {anime?.categories.join(", ")}
        </div>
      </div>
      <div className="text-sm max-w-xl">
        {anime?.description.substring(0, 300)}
      </div>
      <div className="flex gap-2 text-sm">
        <Link
          to={`/watch/${anime.id}`}
          className="bg-primary flex gap-2 py-2 px-4 rounded items-center"
        >
          <FaPlay className="text-white" /> Watch Now!
        </Link>
        <button className="border border-whitepy-2 px-3 rounded">
          <FaHeart className="text-white" size={18} />
        </button>
      </div>
    </Panel>
  );
};

export default Overview;
