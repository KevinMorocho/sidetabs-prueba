
export const MetaData = (props) => {
  const handleDownloadDoc = fileName => e => {
    // Downloads the file
    let link = document.createElement("a");
    link.download = `${fileName}.txt`;
    let blob = new Blob(["CHUPALOOOOOO"], { type: "text/plain" });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <p>{props.description}</p>
      <div className="row ">
        <div className="col-sm-auto">
          <button className="btn btn-primary btn-sm" onClick={handleDownloadDoc("Archivo")}>Download</button>
          <button className="btn btn-secondary btn-sm">Preview</button>
        </div>
      </div>
    </div>
  );
};
