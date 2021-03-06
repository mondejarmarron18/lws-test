import { FC } from "react";
import { FaPlay } from "react-icons/fa";

type TProps = {
  image: string;
  episode: number;
  description: string;
};

const EpisodeCard: FC<TProps> = (props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
      <div className="w-full max-w-[350px] h-full max-h-[200px] relative flex justify-center items-center">
        <button className="absolute bg-[rgba(0,0,0,0.5)] p-5 rounded-full">
          <FaPlay size={20} className="" />
        </button>
        <img
          src={props.image}
          alt={`Episode ${props.episode}`}
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      <div className="text-sm flex-1 pb-4 sm:p-0">
        <div className="font-medium">Episode {props.episode}</div>
        <div className="text-gray-400 mt-2">{props.description}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
