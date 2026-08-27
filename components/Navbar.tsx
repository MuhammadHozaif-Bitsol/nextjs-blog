import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <Image
        src={"/next.svg"}
        width={120}
        height={120}
        alt="next js logo"
      ></Image>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Navbar;
