/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Data } from "../models";

function Trending({ trendingFilms }: any) {
  return (
    <div className="max-w-7xl mx-auto px-8 font-extralight">
      <h1 className="mb-4 text-3xl">Trending</h1>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mb-12"
      >
        {trendingFilms.map((film: Data, index: number) => {
          const { id, title, thumbnail, year, category, rating } = film;
          return (
            <div className="relative" key={id}>
              <SwiperSlide key={index}>
                <img
                  src={thumbnail.trending.large}
                  alt=""
                  className="rounded-lg opacity-80"
                />

                <div className="absolute left-4 bottom-2">
                  <div className="mt-3">
                    <div className="flex items-center gap-2 font-light text-sm">
                      <span>{year}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-500"></div>
                      <span>{category}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-500"></div>
                      <span>{rating}</span>
                    </div>
                  </div>
                  <h2 className="font-bold text-lg md:text-2xl tracking-wide">
                    {title}
                  </h2>
                </div>

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
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Trending;
