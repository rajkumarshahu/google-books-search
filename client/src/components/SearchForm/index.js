import React from "react";

const SearchForm = props => {
  return (
    <div className='container'>
      <form className=''>
        <div className='row '>
          <div className='form-group col-lg-10 col-sm-10 p-0'>
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
          <div className='form-group col-lg-2 col-sm-2 p-0'>
            <button
            onClick={props.handleFormSubmit}
              className='btn btn-lg btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
