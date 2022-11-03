import { useState } from "react";
import Head from "next/head";
import CardList from "../components/CardList";
import Trending from "../components/Trending";
import SearchBox from "../components/SearchBox";
import { Data } from "../models";
import fetchData from "../utils/fetcher";
interface DataProps {
  films: Data[];
}

export default function Home({ films }: DataProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingFilms: Data[] = films.filter(
    (film) => film.isTrending === true
  );
  const recommendedFilms: Data[] = films.filter(
    (film) => film.isTrending === false
  );
  const filteredFilms: Data[] = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Head>
        <title>Movie Entertainment App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 text-white min-h-screen">
        <div className="py-28 lg:pt-4 lg:pl-32">
          <SearchBox
            placeholder="Search for movies or TV series"
            setSearchQuery={setSearchQuery}
          />
          {searchQuery ? (
            <CardList
              title={`Found ${filteredFilms.length} ${
                filteredFilms.length > 1 ? "results" : "result"
              } for '${searchQuery}'`}
              films={filteredFilms}
            />
          ) : (
            <>
              <Trending trendingFilms={trendingFilms} />
              <CardList title="Recommended for you" films={recommendedFilms} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const films = await fetchData();

  return {
    props: { films },
  };
}
