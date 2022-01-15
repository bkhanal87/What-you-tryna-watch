import { React, useState, useEffect } from "react";
import Movie from "../Movie/movieDisplay";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel, Container, Form } from "react-bootstrap";
import AutoComplete from "../AutoComplete";
import CommentBox from "../CommentBox";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const movie = [];
    
    if (search.length > 3) {
      fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=c58b06f8`)
        .then((response) => {
          if (!response.ok) {
            
          }
          
          setDisplay(true);
          return response.json();
        })
        .then((json) => setOptions(json.Search))
        .catch((error) => {
          setDisplay(false);
          
        });
    }
    // setOptions(movie);
  }, [search]);
  function selectOption(value) {
    setSearch(value);
    setDisplay(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=c58b06f8`)
      .then((response) => {
        if (!response.ok) {
          
        }
        return response.json();
      })
      .then((json) => setMovie(json))
      .catch((error) => {
        
      });
  }
  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Container>
            <Form.Label className="input" htmlFor="query">
              Movie Name
            </Form.Label>
            {/* Movie{" "} */}
            <Form.Control
              className="input"
              type="text"
              // placeholder="Enter movie name"
              name="query"
              placeholder="i.e Avengers"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AutoComplete
              options={options}
              selectOption={selectOption}
              display={display}
            />
            <Button className="button" type="submit" value="Submit">
              Search
            </Button>
          </Container>
        </Form.Group>
      </Form>
      <Card className="card-list">
        <Movie movie={movie} />
        <CommentBox movieId={movie.imdbID}></CommentBox>
      </Card>
    </>
  );
};
export default SearchBar;
