import { React, useState } from "react";
import Movie from '../Movie';

const SearchBar = () => {
  
  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    console.log(search)
    
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=c58b06f8`)
    .then((response) => {
      if (!response.ok) {
          console.log(`Did not get an ok. got: ${response.statusText}`);
      }
      return response.json();
    })
    .then(json => setMovie(json))
    .catch((error) => {
      console.log(`Error getting data: ${error.message}`);
    })
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
              type="text"
              id="movie-search"
              placeholder="Enter movie name"
              name="s" 
              value={search}
              onInput={e => setSearch(e.target.value)}
          />
        <button type="submit" value="Submit">Search</button>
      </form>
      <Movie movie={movie}/>
    </div>
  );
}

export default SearchBar;
