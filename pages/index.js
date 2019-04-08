import Link from "next/link";
import Layout from "../layouts/MyLayout";

const listStyle = {
  marginBottom: 10,
};

const PostLink = ({ title }) => (
  <li style={listStyle}>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
