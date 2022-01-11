import { React, useState } from "react";
import Movie from "../Movie/movieDisplay";
import Img1 from "../../img/img1.jpg";
import Img2 from "../../img/img2.jpg";
import Img3 from "../../img/img3.jpg";
import Img4 from "../../img/img4.jpg";
import Img5 from "../../img/img5.jpg";

import { Carousel } from "react-bootstrap";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(search);

    fetch(`http://www.omdbapi.com/?t=${search}&apikey=c58b06f8`)
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
      <form className="form" onSubmit={handleSubmit}>
        <label className="input" htmlFor="query">
          Movie Name
        </label>
        {/* Movie{" "} */}
        <input
          className="input"
          type="text"
          // placeholder="Enter movie name"
          name="query"
          placeholder="i.e Avengers"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
        <button className="button" type="submit" value="Submit">
          Search
        </button>
      </form>
      
      <div className="card-list">
        <Movie movie={movie} />
       
        </div>
    </>
  );
};
export default SearchBar;
