import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};
const PostDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    notFound();
  }

  const post: Post = await response.json();

  return (
    <article className="max-w-2xl mx-auto space-y-8 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
      <Link
        href="/posts"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
      >
        &larr; Back to all posts
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight capitalize text-gray-900">
          {post.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.body}
        </p>
      </div>
    </article>
  );
};

export default PostDetailsPage;
