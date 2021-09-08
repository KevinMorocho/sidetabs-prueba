const Footer = () => (
    <footer className="bg-success text-light text-center">
      <div className="container justify-content-evenly p-4">
        <p>&copy; Alertas</p>
        <p>2020 - {new Date().getFullYear()}</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
  
  export default Footer;