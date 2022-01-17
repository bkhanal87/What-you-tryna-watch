import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/client';
import { GET_MOVIE_COMMENTS } from '../../utils/queries';
import '../styles/comments.css'

const CommentList = (props) => {

    console.log(props.movieId)

    let userData;
    const { loading, data } = useQuery(GET_MOVIE_COMMENTS, {
        variables: { movieId: props.movieId }
    })


    if (!data) return "No comments for this movie yet. You can be the first!";

    if (loading) return null;

    console.log(data.getMovieComments.length)

    return (
        <div>
            <h4 className="c-title">Comments</h4>
            {
            data.getMovieComments.length < 1
            ?
            <div>No comments for this movie yet. You can be the first!</div>
            :
            data.getMovieComments.map((item) => <div className="c-body">{item.commentBody}</div>)
            }
        </div>
    );
};

export default CommentList;