import React from "react";
import ReactDOM from "react-dom";
import App from "./App2.js";
import SearchBar from "./Components/SearchBar/searchMovie.js";
import "./Components/styles/style.css";
import "./Components/styles/movie.css"
import "./Components/styles/searchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Finder App</h1>
        <SearchBar/>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,document.getElementById("root"));
