const InformationBlock = ({ img, altImg, title, text, button, reverse }) => (
  <div className="row-sm-auto">
      <div className="col-12">
      <img className="col-sm-3 float-md-end mb-3 ms-md-3" src={img} alt={altImg} align="left" />
      </div>
      <div className="col py-5">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
  </div>
);

export default InformationBlock;
