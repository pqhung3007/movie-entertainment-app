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
    <div className="max-w-7xl px-8 mx-auto  font-extralight">
      <h1 className="mb-4 text-3xl">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {films.map((film: Data) => {
          return <CardItem {...film} key={film.id} />;
        })}
      </div>
    </div>
  );
}

export default FilmList;
