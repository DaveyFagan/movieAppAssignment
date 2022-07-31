import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getCredits} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useParams } from "react-router-dom";


const MovieActorsPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["actors", { id: id }],
    getCredits
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.cast;

  console.log(actors);

  return (
    <PageTemplate
        title="Movies Actors"
        actors={actors}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
  );
};

export default MovieActorsPage;