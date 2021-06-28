import React from "react";
import "./PostArea.css";
import Post from "../post/Post";
function PostArea() {
  return (
    <div className="main-area">
      <h1>Jobs</h1>
    <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
    </div>
  );
}

export default PostArea;
