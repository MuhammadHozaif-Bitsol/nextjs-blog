import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  "use cache";
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.id} className="block group">
            <Link href={`/posts/${post.id}`} className="...">
              <h2 className="...">{post.title}</h2>
              <p className="...">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
