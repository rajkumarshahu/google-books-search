import React from "react";
import "./style.css";

const BookDescription = props => {
  return (
    <div>
      <div className='card'>
        <h5 className='card-header'>Result {props.index}</h5>
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
              <button
                onClick={props.handleSaveBook}
                className='btn btn-success btn-lg save-btn'
              >
                <i class='fas fa-save'></i> Save Book
              </button>
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
    </div>
  );
};

export default BookDescription;
