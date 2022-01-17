import { React, useState } from "react";
import CommentList from "../CommentList";
import { Card, CardGroup, Figure, ListGroup } from "react-bootstrap";
import Footer from "../Footer";

const Movie = (props) => {
  return (
    // <>
    <Card>
      {/* <div className="card-content"> */}
      {/* <Card> */}
      <Figure>
        <Figure.Image
          width={271}
          height={280}
          alt="171x180"
          src={props.movie.Poster}
        />
      </Figure>
      {/* <img className="card-img" src={props.movie.Poster} /> */}
      <Figure.Caption>Title:{props.movie.Title}</Figure.Caption>
      <Figure.Caption>Rating:{props.movie.Rated}</Figure.Caption>
      <Figure.Caption>Release:{props.movie.Year}</Figure.Caption>
      <Figure.Caption>Runtime:{props.movie.Runtime}</Figure.Caption>
      <Figure.Caption>Genre:{props.movie.Genre}</Figure.Caption>

      {/* <ListGroup variant="flush">
        <ListGroup.Item>Title: {props.movie.Title}</ListGroup.Item>{" "}
        <ListGroup.Item>Rating: {props.movie.Rated}</ListGroup.Item>
        <ListGroup.Item>Release: {props.movie.Year}</ListGroup.Item>
        <ListGroup.Item>Runtime: {props.movie.Runtime}</ListGroup.Item>
        <ListGroup.Item>Genre: {props.movie.Genre}</ListGroup.Item>
      </ListGroup> */}
      {/* </Card> */}

      {/* <p className="card-title">
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
      </p> */}
      {/* </div> */}
      <CommentList movieId={props.movie.imdbID} />
    </Card>

    // </>
  );
};

export default Movie;
