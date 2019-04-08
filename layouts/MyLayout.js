import Header from "../components/header";

const layoutStyle = {
  padding: 20,
  margin: 20,
  border: "1px solid #ddd",
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
