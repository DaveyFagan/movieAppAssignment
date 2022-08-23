
# ICT Skills 2 Assignment.

Name: David Fagan

## Overview.

The Movie Fan App is a service that helps you discover different movies and actors.
 
+ Can see what actors are in a movie
+ Can see all the movies for a certain actor
+ Can have a look at the actors details
+ Can discover similar movies
+ etc

## Setup requirements.

To run the app on your local machine, you will have to download the file from this repo. In the project folder you will then have to create a .env file. 

The .env file will contain 2 variables:
+ REACT_APP_TMDB_KEY=.... your API key value ...
+ FAST_REFRESH=false

To get your API key you need to sign up to The TMDB API and create an account:
+ https://www.themoviedb.org/signup

Log in to your account. 

To get a key, follow this sequence:
+ "Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details"

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /movies/similarmovies/:id - list movies similar to id.
+ /movies/movieactors/:id - list actors for a movie.
+ /actorsmovies/:id - list movies for a actor.
+ /actor/:id - detailed information on an actor.

### Views/Pages.

>Lists all the similar movies to a movie. Filter on genre is supported
![][d1]
![][d5]

>Lists all actors of a movie.
![][d2]

>Lists all movies of an actor. Filter on genre is supported
![][d3]
![][d6]

>Shows detailed information of a certain actor.
![][d4]

### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]


[d1]: ./public/similarMovies.PNG
[d2]: ./public/movieActors.PNG
[d3]: ./public/actorMovies.PNG
[d4]: ./public/actorDetails.PNG
[d5]: ./public/similarMovieGenreFilter.PNG
[d6]: ./public/actorMovieFilterGenre.PNG
