import { Link } from "react-router-dom";
const DescribeSection = () => {
  return (
    <div className=" ">
      <div className="">
        <img className="" src="/src/img/llama.svg" alt="" />
        <div className="">
          <h3>Contenido SIG</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum non
            laboriosam esse dolorum vitae totam magni similique dolores?
            Asperiores veniam incidunt ipsum accusantium omnis recusandae
            exercitationem quisquam optio natus.
          </p>
          <div className="">
            <Link to="/mapa">
              <a
                className="btn btn-success"
                // rel="noopener"
                // target="_blank"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Visualizar Mapa"
              >
                <i class="fas fa-location-arrow"></i>
                 Mapa 
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribeSection;
