/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CardItem from "./CardItem";
import { Data } from "../models";

interface FilmsProps {
  title: string;
  films: any[];
}

function FilmList({ title, films }: FilmsProps) {
  return (
    <div className="px-8">
      <h1 className="mb-4 text-3xl">{title}</h1>
      <div className="max-w-7xl mx-auto font-extralight">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {films.map((film: Data) => {
            return <CardItem {...film} key={film.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FilmList;
