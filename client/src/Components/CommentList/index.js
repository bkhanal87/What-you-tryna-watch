import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/client';
import { GET_MOVIE_COMMENTS } from '../../utils/queries';

const CommentList = (props) => {

    console.log(props.movieId)

    let userData;
    const { loading, data } = useQuery(GET_MOVIE_COMMENTS, {
        variables: { movieId: props.movieId }
    })


    if (!data) return "no comments";
    if (loading) return null;
    console.log(data)
    return (
        <div>
            {data.getMovieComments.map((item) => item.commentBody)}
        </div>
    );
};

export default CommentList;