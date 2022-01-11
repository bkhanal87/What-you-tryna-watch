import { React, useState } from "react";
import Comments from '../Comments'


const Movie = (props) => {
    
    return (
        <div>
            <img src={props.movie.Poster} />
            <h1> {props.movie.Title} </h1>
            <h3> {props.movie.Rated} </h3>
            <h3> {props.movie.Year} </h3>
            <h3> {props.movie.Runtime} </h3>
            <h3> {props.movie.Genre} </h3>

            <Comments movie={props}/>
        </div>
    );
}

export default Movie;