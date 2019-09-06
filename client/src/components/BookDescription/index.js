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
            <div className='col-lg-7 col-sm-7'>
              <p className='card-text'>
                <strong>Description:</strong> {props.description}
              </p>
              <div>
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
              <button
                onClick={props.handleSaveBook}
                className='btn btn-success btn-lg btn-block text-center save-btn mb-4'
              >
                <i className='fas fa-save'></i> Save This Book
              </button>
            </div>
            <div className='col-lg-4 col-sm-4 text-center'>
              <img
                alt={props.title}
                className='card-img img-fluid mx-auto'
                src={props.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
