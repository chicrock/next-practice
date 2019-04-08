import Header from "../components/header";

const layoutStyle = {
  padding: 20,
  margin: 20,
  border: "1px solid #ddd",
};

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
};

export default withLayout;
