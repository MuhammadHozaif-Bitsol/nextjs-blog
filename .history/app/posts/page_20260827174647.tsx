import React from "react";
const async posts = () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return <div>posts</div>;
};

export default posts;
