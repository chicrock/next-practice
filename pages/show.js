import Layout from "../layouts/MyLayout";
import fetch from "isomorphic-unfetch";

const Show = ({ show: { name, summary, image } }) => (
  <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?p>/g, "")}</p>
    <img src={image.medium} />
  </Layout>
);

Show.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
