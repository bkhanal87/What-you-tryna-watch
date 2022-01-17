import { React, useState } from "react";
import CommentList from "../CommentList";
import { Card, CardGroup, Figure, ListGroup, Accordion } from "react-bootstrap";
import Footer from "../Footer";
import '../styles/movieDisplay.css'

const Movie = (props) => {
  return (
    // <>
    <>
    <Card>
      {/* <div className="card-content"> */}
      {/* <Card> */}
      <div className="m">
        <div className="m-left">
          <Figure>
            <Figure.Image
              width={300}
              height={300}
              alt="Movie poster"
              src={props.movie.Poster}
            />
          </Figure>
        </div>

        <div className="m-right">
          <Figure className="m-title">{props.movie.Title}</Figure>
          <Figure className="m-info">Rating: {props.movie.Rated}</Figure>
          <Figure className="m-info">Release: {props.movie.Year}</Figure>
          <Figure className="m-info">Runtime: {props.movie.Runtime}</Figure>
          <Figure className="m-info">Genre: {props.movie.Genre}</Figure>

          <Accordion className="m-plot">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Story</Accordion.Header>
              <Accordion.Body>
                {props.movie.Plot}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>

      </div>
      {/* <img className="card-img" src={props.movie.Poster} /> */}

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
    </>

    // </>
  );
};

export default Movie;
