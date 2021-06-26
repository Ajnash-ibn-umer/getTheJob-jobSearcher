import React from "react";
import "./PostArea.css";
import Post from "../post/Post";
function PostArea() {
  return (
    <div className="main-area">
      <h1>Jobs</h1>
    <posts className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        </posts>
    </div>
  );
}

export default PostArea;
