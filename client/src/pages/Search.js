import React, {Component} from 'react';
import Jumbotron from "../components/Jumbotron";
import SearchForm from '../components/SearchForm';
import BookDescription from '../components/BookDescription';
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        search: ""
      };

      // searches the GoogleBooks API storing the data in books array
      searchBooks = query => {
        API.searchBooks(query)
          .then(res =>
            this.setState(
              {
                books: res.data.items,
                search: ""
              },
              console.log(res.data.items)
            )
          )
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

      // once the search term is submitted, search the GoogleBooks API for the value of `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
      };
    render() {
        return(
        <div>
        <Jumbotron/>
            <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />

            {this.state.books.map(book => (
                  <BookDescription
                    key={book.id}
                    src={book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveBook={() => this.handleSaveBook({
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                      authors: book.volumeInfo.authors,
                      date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink})}
                  />
                ))}
        </div>

        )

    }
}

export default Search;