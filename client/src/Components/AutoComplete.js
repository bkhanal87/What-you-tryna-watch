import React, { useEffect, useState, useRef } from "react";

const AutoComplete = (props) => {
  // states
  const [display, setDisplay] = useState(true);
  const options = props.options ?? [];
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      // setDisplay(false);
    }
  };

  const movieDex = (singleMovie) => {
    // setDisplay(false);
  };
  return (
    <div ref={wrapperRef} className="flex-container">
      {props.display && (
        <div className="autoContainer">
          {options.map((v, i) => {
            return (
              <div
                className="option"
                onClick={() => {
                  props.selectOption(v.Title);
                }}
                key={i}
                tabIndex="0"
              >
                <span>{v.Title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
