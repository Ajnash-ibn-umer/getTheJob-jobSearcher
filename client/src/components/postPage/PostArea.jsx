import React from "react";
import "./PostArea.css";
import Post from "../post/Post";
function PostArea() {
  return (
    <div className="main-area">
      <h3>Jobs</h3>
    <div className='posts'>
        <Post />
        <Post />
        <Post />
      
        </div>
    </div>
  );
}

export default PostArea;
