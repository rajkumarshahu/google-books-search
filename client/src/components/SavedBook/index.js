import React from "react";

const SavedBook = props => {
  return (
    <span>

<div className='card'>
        <h5 className='card-header'>Saved Book {props.index}</h5>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <div className='row'>
            <div className='col-lg-8 col-sm-8'>
              <p className='card-text'>
                <strong>Description:</strong> {props.description}
              </p>
            </div>
            <div className='col-lg-4 col-sm-4 text-center'>
              <img
                alt={props.title}
                className='card-img img-fluid m-4'
                src={props.src}
              />
            </div>
          </div>
          <p>
            <strong>Author(s):</strong> {props.authors}
          </p>
          <p>
            <strong>Google Books Link:</strong>{" "}
            <a href={props.link} target={"_blank"}>
              {props.title}
            </a>
          </p>
        </div>
      </div>
      {/* <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        <p><strong>Author(s):</strong> {props.authors}</p>
        <p><strong>Publish Date:</strong> {props.date}</p>
        <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
        <button onClick={props.handleDeleteBook} className="btn btn-warning delete-btn" style={{ marginBottom: "30px"}}>
          Delete
        </button>
      </div>
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        <p style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} /> */}
    </span>
  );
}

export default SavedBook;