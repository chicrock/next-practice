import Layout from "../layouts/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ score, show: { id, name } }) => (
        <li key={id}>
          <Link as={`/s/${id}`} href={`/show?id=${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
