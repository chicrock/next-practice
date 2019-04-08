import Link from "next/link";
import Layout from "../layouts/MyLayout";

const listStyle = {
  marginBottom: 10,
};

const getPosts = () => {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
  ];
};

const PostLink = ({ title, id }) => (
  <li style={listStyle}>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(({ id, title }) => (
        <PostLink id={id} title={title} key={id} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

export default Blog;
