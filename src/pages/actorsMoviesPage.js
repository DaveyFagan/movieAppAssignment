import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovieCredits} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useParams } from "react-router-dom";


const ActorsMoviesPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["actors movies", { id: id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />
  }
console.log("the actors movies", data)
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.cast;

  // These three lines are redundant; we will replace them laterg.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  console.log(movies);

  return (
    <PageTemplate
        title="Actors Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
  );
};

export default ActorsMoviesPage;