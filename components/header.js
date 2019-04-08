import Link from "next/link";

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
};

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
};

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About Page</a>
    </Link>
  </div>
);

export default Header;
