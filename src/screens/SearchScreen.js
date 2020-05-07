import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import TopBar from "../components/TopBar";
import LargerMovieCard from "../components/LargerMovieCard";
import MovieCardList from "../components/MovieCardList";

export default function SearchScreen() {
  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <TopBar
        searchText={searchText}
        setSearchText={setSearchText}
        searchEntered={searchEntered}
      />
      <MovieCardList movies={movies} />
    </div>
  );

  function searchEntered() {
    //HTTP CODE - ON ENTER
  }

  //Create a function for movie clicked
}
