import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import MovieActorsPage from './pages/movieActorsPage';
import ActorsMoviesPage from './pages/actorsMoviesPage';
import ActorPage from "./pages/actorDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
        <Route path="/movies/upcomingmovies" element={<UpcomingMoviesPage/>}/>
        <Route path="/movies/similarmovies/:id" element={<SimilarMoviesPage/>}/>
        <Route path="/movies/movieactors/:id" element={<MovieActorsPage/>}/>
        <Route path="/actorsmovies/:id" element={<ActorsMoviesPage/>}/>
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/actor/:id" element={<ActorPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));