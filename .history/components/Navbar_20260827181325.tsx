import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      <Link href="/">
        <Image
          src="/next.svg"
          width={100}
          height={20}
          alt="Next.js logo"
          priority
        />
      </Link>
      <div className="flex gap-6 font-medium">
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
