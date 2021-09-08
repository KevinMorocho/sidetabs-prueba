const InformationBlock = ({ img, altImg, title, text, button, reverse }) => (
    <div className="row-md-auto gx-5">
      <div className="p-3 col-12">
        <img className="col-sm-2 float-md-end mb-3 ms-md-3" src={img} alt={altImg} align="left" />
      </div>
      <div className="col">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
  
  export default InformationBlock;