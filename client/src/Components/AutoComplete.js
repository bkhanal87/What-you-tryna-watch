Import Hooks from react
import { useState, useEffect, useRef } from "react";

// Autocomplete component
const AutoComplete = ({
  options = ["Avengers", "Marvel", "Spiderman No Way Home"],
}) => {
  // setvalue state with default value
  const [value, setValue] = useState("");

  // State to show suggestions to tell whether to show suggestions or not. False by default

  const [showSuggestions, setShowSuggestions] = useState(false);

  // value of suggestions set to options, filtered through the options and value changed to lowercase so it won't be case sensitive
  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleOutsideCLick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleOutsideCLick);
    return () => {
      document.removeEventListener("click", handleOutsideCLick);
    };
  }, []);

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        value={value}
        // function to control the change of State.
        onChange={handleChange}
        placeholder="Search"
        // onFocus prop to show suggestion when focusing on the search bar. Show suggestions set to true to display a list of items
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            // return a list item with a key of suggestion
            <li
              onClick={() => handleSuggestionClick(suggestion)}
              key={suggestion}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};





export default AutoComplete;


