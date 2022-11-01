import React from "react";
import { Film } from "../models";

function Trending({ trendingFilms }: any) {
  return (
    <div>
      {trendingFilms.map((film: Film) => (
        <h1 key={film.id}>{film.title}</h1>
      ))}
    </div>
  );
}

export default Trending;
