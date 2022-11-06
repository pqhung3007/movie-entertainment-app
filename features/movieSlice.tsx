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
      state.bookmarkedMovies.push(
        state.movies.find((element: any) => element.id === action.payload)
      );
    },
    removeBookmarkFromMovies(state, action) {
      const movieIndex = state.movies.findIndex(
        (element: any) => element.id === action.payload
      );

      state.movies[movieIndex].isBookmarked = false;
      state.bookmarkedMovies = state.bookmarkedMovies.filter(
        (element) => element.id !== action.payload
      );
    },
    addBookmarkToSeries(state, action) {
      const movieIndex = state.movies.findIndex(
        (element: any) => element.id === action.payload
      );

      state.movies[movieIndex].isBookmarked = true;
      state.bookmarkedSeries.push(state.movies[movieIndex]);
    },
    removeBookmarkFromSeries(state, action) {
      const movieIndex = state.movies.findIndex(
        (element: any) => element.id === action.payload
      );

      state.movies[movieIndex].isBookmarked = false;
      state.bookmarkedSeries = state.bookmarkedSeries.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export const {
  addBookmarkToMovies,
  addBookmarkToSeries,
  removeBookmarkFromMovies,
  removeBookmarkFromSeries,
} = movieSlice.actions;

export default movieSlice.reducer;
