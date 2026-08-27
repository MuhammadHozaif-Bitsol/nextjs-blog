import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function getPosts= async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts: Post[] = await response.json();
}
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts: Post[] = await response.json();
const PostsPage = async () => {
  

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Posts</h1>

      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.id} className="block group">
            <Link
              href={`/posts/${post.id}`}
              className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 capitalize text-gray-800 line-clamp-1 group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>
              <span className="text-sm font-medium text-blue-600">
                Read more &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
