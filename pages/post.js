import { withRouter } from "next/router";
import Layout from "../layouts/MyLayout";

const Content = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <div>This is the blog post content.</div>
  </div>
);

const Post = ({
  router: {
    query: { title },
  },
}) => (
  <Layout>
    <Content title={title} />
  </Layout>
);

export default withRouter(Post);
