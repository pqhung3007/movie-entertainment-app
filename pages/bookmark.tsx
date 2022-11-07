import React from "react";
import Head from "next/head";
import CardList from "../components/CardList";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";

export default function Bookmark() {
  const { bookmarkedMovies, bookmarkedSeries } = useSelector(
    (state: any) => state.movies
  );
  return (
    <div>
      <Head>
        <title>Movie Entertainment App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 text-white min-h-screen">
        <div className="flex flex-col py-28 lg:pt-4 lg:pl-32 gap-8">
          <CardList title="Movies" films={bookmarkedMovies} />
          <CardList title="TV Series" films={bookmarkedSeries} />
        </div>
      </main>
    </div>
  );
}
