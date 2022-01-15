import { gql } from '@apollo/client';


export const GET_MOVIE_COMMENTS = gql`
query getMovieComments ($movieId: String!) {
    getMovieComments(movieId: $movieId) {
      _id
      commentBody
    }
  }`