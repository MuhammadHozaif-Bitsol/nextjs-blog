const Navbar = () => {
  return (
    <>
      <header>
        <Image
          src={"/next.svg"}
          width={120}
          height={120}
          alt="next js logo"
        ></Image>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </header>
    </>
  );
};

export default Navbar;
