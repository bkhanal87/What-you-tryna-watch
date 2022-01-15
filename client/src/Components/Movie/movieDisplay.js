import { React, useState } from "react";

const Movie = (props) => {
  return (
    <div className="card-content">
      <img className="card-img" src={props.movie.Poster} />
      <p className="card-title">
        <small>{props.movie.Title}</small>{" "}
      </p>
      <p className="card-rate">
        <small>RATING:{props.movie.Rated}</small>{" "}
      </p>
      <p className="card-year">
        <small>RELEASE: {props.movie.Year}</small>{" "}
      </p>
      <p className="card-runtime">
        <small>RUNTIME: {props.movie.Runtime}</small>{" "}
      </p>
      <p className="card-genre">
        <small>GENRE: {props.movie.Genre}</small>{" "}
      </p>

      {/* <Comments movie={props} /> */}
    </div>
  );
};

export default Movie;
