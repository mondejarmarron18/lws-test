import React, { FC } from "react";

type TProps = {
  anime: TAnime;
};

const ThrowbackCard: FC<TProps> = ({ anime }) => {
  return (
    <div
      key={anime.id}
      className="cursor-pointer shrink-0 w-[400px] h-[400px] rounded-2xl border-2 border-white overflow-hidden animate__zoom"
    >
      <img
        src={anime.image}
        alt={anime.title}
        className="zoom_child object-cover w-full h-full absolut top-0 left-0"
      />
    </div>
  );
};

export default ThrowbackCard;
