import { FC } from "react";
import { FaPlay } from "react-icons/fa";

type TProps = {
  image: string;
  episode: number;
  description: string;
};

const EpisodeCard: FC<TProps> = (props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
      <div className="w-[350px] h-[200px] relative flex justify-center items-center">
        <button className="absolute bg-[rgba(0,0,0,0.5)] p-5 rounded-full">
          <FaPlay size={20} className="" />
        </button>
        <img
          src={props.image}
          alt={`Episode ${props.episode}`}
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      <div className="text-sm flex-1 border-b border-gray-800 pb-4 sm:p-0 sm:border-transparent">
        <div className="font-medium">Episode {props.episode}</div>
        <div className="text-gray-400 mt-2">{props.description}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
