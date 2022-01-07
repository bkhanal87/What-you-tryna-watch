import { useState } from "react";

const AutoComplete = ({
  options = ["Avengers", "Marvel", "Spiderman No Way Home"],
}) => {
  const [value, setValue] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion}></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
