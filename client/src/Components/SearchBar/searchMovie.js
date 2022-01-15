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
    console.log("running");
    if (search.length > 3) {
      fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=c58b06f8`)
        .then((response) => {
          if (!response.ok) {
            console.log(`Did not get an ok. got: ${response.statusText}`);
          }
          console.log(response);
          setDisplay(true);
          return response.json();
        })
        .then((json) => setOptions(json.Search))
        .catch((error) => {
          setDisplay(false);
          console.log(`Error getting data: ${error.message}`);
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
    console.log(search);
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=c58b06f8`)
      .then((response) => {
        if (!response.ok) {
          console.log(`Did not get an ok. got: ${response.statusText}`);
        }
        return response.json();
      })
      .then((json) => setMovie(json))
      .catch((error) => {
        console.log(`Error getting data: ${error.message}`);
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
        <CommentBox movieTitle={movie.Title}></CommentBox>
      </Card>
    </>
  );
};
export default SearchBar;