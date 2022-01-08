import { React, useState } from "react";

// We take our props object and assign each property to it's own variable name.
// In this case we only passed one prop, `onFormSubmit`
function SearchBar() {
  

  return (
    <div>
      <input
            type="text"
            id="header-search"
            placeholder="Enter movie name"
            name="s" 
        />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
