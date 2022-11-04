/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Data } from "../models";

export default function CardItem({
  id,
  title,
  thumbnail,
  year,
  category,
  rating,
}: Data) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const addToBookmark = () => {
    setIsBookmarked((isBookmarked) => !isBookmarked);
  };
  return (
    <div className="card-item" key={id}>
      {/* Card image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={thumbnail.regular.medium}
          alt={title}
          className="hover:scale-110 duration-200"
        />

        <div className="absolute right-2 top-2 group">
          <button
            className="h-8 w-8 flex justify-center items-center rounded-full bg-black/80 group-hover:bg-white"
            onClick={addToBookmark}
          >
            <svg
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              className={`stroke-white group-hover:stroke-black ${
                isBookmarked && "fill-white"
              }`}
            >
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                strokeWidth="1.5"
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
}
