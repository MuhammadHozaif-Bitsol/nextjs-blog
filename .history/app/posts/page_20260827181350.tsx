type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Posts</h1>

      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 capitalize text-gray-800 line-clamp-1">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
