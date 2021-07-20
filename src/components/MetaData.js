export const MetaData = (props) => {
  return (
    <div>
      <p>{props.description}</p>
      <div className="row ">
        <div className="col-sm-auto">
          <button className="btn btn-primary btn-sm">Download</button>
          <button className="btn btn-secondary btn-sm">Preview</button>
        </div>
      </div>
    </div>
  );
};
