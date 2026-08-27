const pages = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div>
      <h1>Posts</h1>
      <ul></ul>
    </div>
  );
};

export default pages;
