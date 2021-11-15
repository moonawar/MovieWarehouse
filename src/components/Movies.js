import React from "react";

import classes from "./Movies.module.css";
import Movie from "./Movie";

const Movies = (props) => {
  const contentStyle = {
    color: "white",
    textAlign: "center",
  };
  let content = <h2 style={contentStyle}>You have no {props.page}</h2>;

  if (props.data.length !== 0) {
    content = props.data.map((post) => {
      return (
        <Movie
          title={post.title}
          key={post.id}
          id={post.id}
          posterUrl={post.poster_path}
          rating={post.vote_average}
          name={post.name}
          type={post.media_type}
          post={post}
        />
      );
    });
  }

  return <div className={classes.movies}>{content}</div>;
};

export default Movies;
