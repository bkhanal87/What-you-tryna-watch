import React from "react";

const Comments = (props) => {
  return (
    <div>
      <h1>Comments Section</h1>
      <input
            type="text"
            id="comment-section"
            placeholder="Enter comment here"
            name="s" 
        />
      <button type="submit">Post Comment</button>
      
    </div>
  );
};

export default Comments;