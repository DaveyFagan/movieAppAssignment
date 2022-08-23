
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
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ etc.
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


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

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png