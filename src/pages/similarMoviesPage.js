import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToPlaylist'
import { useParams } from "react-router-dom";


const SimilarMoviesPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["similar", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  console.log(movies);

  return (
    <PageTemplate
        title="Similar Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
  );
};

export default SimilarMoviesPage;