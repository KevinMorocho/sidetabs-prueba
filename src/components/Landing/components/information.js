const InformationBlock = ({ img, altImg, title, text, button, reverse }) => (
    <div className=" ">
      <div className=" ">
        <img src={img} alt={altImg} />
      </div>
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        {button ?
          <div className="container">
            <a className="btn btn-primary"
              href="#"
              // rel="noopener"
              // target="_blank"
            >
              <div>
                <p>Proximamente...</p>
                <p>Google Play</p>
              </div>
            </a>
          </div>
          :
          null
        }
      </div>
    </div>
  )
  
  export default InformationBlock;