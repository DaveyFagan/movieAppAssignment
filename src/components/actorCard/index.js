import React, { useContext  } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorCard({ actor, action }) {
  const classes = useStyles();
  const { favourites } = useContext(MoviesContext);

  if (favourites.find((id) => id === actor.id)) {
    actor.favourite = true;
  } else {
    actor.favourite = false
  }


  return (
    <Card className={classes.card}>
       <CardHeader
      className={classes.header}
      avatar={
        actor.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {actor.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actorsmovies/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Actors movies ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}