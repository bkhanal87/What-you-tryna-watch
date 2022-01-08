import React from "react";

const Comments = () => {
  return (
    <div>
      <input
            type="text"
            id="header-search"
            placeholder="Enter comment here"
            name="s" 
        />
      <button type="submit">Search</button>
      <div>
        <p>User Name</p>
        <div>This is a comment.</div>
      </div>
    </div>
  );
};

export default Comments;