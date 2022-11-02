/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Film } from "../models";

function Recommendation({ recommendedFilms }: any) {
  return (
    <div className="max-w-7xl mx-auto px-8 font-extralight">
      <h1 className="mb-4 text-3xl">Recommended for you</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {recommendedFilms.map((film: Film) => {
          const { id, title, thumbnail, year, category, rating } = film;
          return (
            <div className="" key={id}>
              {/* Card image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={thumbnail.regular.medium}
                  alt={title}
                  className="hover:scale-110 duration-200"
                />

                <div className="absolute right-2 top-2 group">
                  <button className="h-8 w-8 flex justify-center items-center rounded-full bg-black/80 group-hover:bg-white">
                    <svg
                      width="12"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-white group-hover:stroke-black"
                    >
                      <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        strokeWidth="1.5"
                        fill="none"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card content */}
              <div className="mt-3">
                <div className="flex items-center gap-2 font-light text-sm">
                  <span>{year}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-500"></div>
                  <span>{category}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-500"></div>
                  <span>{rating}</span>
                </div>
              </div>
              <h2 className="font-bold text-lg">{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommendation;
