import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../public/data.json";
import { Data } from "../models";

interface MovieState {
  movies: any;
  bookmarkedMovies: Data[];
  bookmarkedSeries: Data[];
}

const initialState: MovieState = {
  movies: data,
  bookmarkedMovies: [],
  bookmarkedSeries: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addBookmarkToMovies(state, action) {
      const movieIndex = state.movies.findIndex(
        (element: any) => element.id === action.payload
      );

      state.movies[movieIndex].isBookmarked = true;
      state.bookmarkedMovies.push(state.movies[movieIndex]);
    },
    addBookmarkToSeries(state, action) {
      const movieIndex = state.movies.findIndex(
        (element: any) => element.id === action.payload
      );

      state.movies[movieIndex].isBookmarked = true;
      state.bookmarkedSeries.push(state.movies[movieIndex]);
    },
  },
});

export const { addBookmarkToMovies, addBookmarkToSeries } = movieSlice.actions;

export default movieSlice.reducer;
