/*
import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
    />
  );
};
export default UpcomingMoviesPage;
*/
import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // These three lines are redundant; we will replace them laterg.
  const addToFavourites = () => null;
    localStorage.setItem('favourites', JSON.stringify(addToFavourites))


  return (
    <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
  );
};

export default UpcomingMoviesPage;