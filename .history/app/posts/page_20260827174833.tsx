import React from "react";
const posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return <div>posts</div>;
};

export default posts;
