import React from "react";
import "./Post.css";
import {Card,Button} from 'react-bootstrap'
function Post() {
  return (
    <Card body className="post">
   
      <h6 className="title">Title</h6>
      <div >
      <p className="date"> 15/6/2000</p>
      <p className="discription" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repellat.
     as sapiente. Laboriosam!</p>
      <p className="salary">Rs:10000-30000</p>
      </div>
      <Button className="btn btn-success">Read more</Button>
      </Card>
  
  );
}

export default Post;
