import React, { Dispatch, SetStateAction } from "react";

interface QueryProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchBox({ setSearchQuery }: QueryProps) {
  return (
    <div className="mt-4 mb-8">
      <form action="">
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-8">
          {/* Search icon */}
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
              fill="#FFF"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="w-full py-2 bg-transparent focus:outline-none focus:border-b focus:border-b-blue-50 font-extralight"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
