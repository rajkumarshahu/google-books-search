import React from "react";

const SearchForm = props => {
  return (
    <div className='container'>
      <form className=''>
        <div className='row '>
          <div className='form-group col-lg-11 col-sm-11 p-0'>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              className='form-control form-control-lg'
              name='search'
              type='search'
              placeholder='Search for a book'
              aria-label='Search'
            />
          </div>
          <div className='form-group col-lg-1 col-sm-1 p-0 text-center'>
            <button
              onClick={props.handleFormSubmit}
              className='btn btn-lg btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              <i className="fas fa-search "></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
