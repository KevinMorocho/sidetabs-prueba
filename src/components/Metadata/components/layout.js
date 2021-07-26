import Footer from "./footer";


const Layout = ({ children }) => (
  <>
    <div className="container">
      {/**Posible contenido dinámico*/}
      <div className="py-4">{children}</div>
    </div>
    <Footer />
  </>
);

export default Layout;
