import Link from "next/link";
import Layout from "../layouts/MyLayout";

const listStyle = {
  marginBottom: 10,
};

const PostLink = ({ title, id }) => (
  <li style={listStyle}>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Blog;
