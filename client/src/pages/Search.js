import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import BookDescription from "../components/BookDescription";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    search: "",
  };

  // searches the GoogleBooks API storing the data in books array
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: "",
          }
        )
      )

  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  // saves book to database
  handleSaveBook = bookData => {
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        {this.state.books.map(book => (
          <BookDescription
            key={book.id}
            src={
              book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://media0.giphy.com/media/QgtqRPpAqPz0I/source.gif'
            }
            title={book.volumeInfo.title}
            authors={
                book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Author information not available"
            }
            date={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description? book.volumeInfo.description : 'Description not available'}
            link={book.volumeInfo.infoLink}
            handleSaveBook={() =>
              this.handleSaveBook({
                title: book.volumeInfo.title,
                src: book.volumeInfo.imageLinks.thumbnail,
                authors: book.volumeInfo.authors,
                date: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                link: book.volumeInfo.infoLink,
              })
            }
          />
        ))}
      </div>
    );
  }
}

export default Search;
