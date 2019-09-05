import React, {Component} from 'react';
import SavedBook from "../components/SavedBook";
import API from "../utils/API";

class SavedBooks extends Component {
    state = {
        books: []
      };

      // grab the books from /api/books
      componentDidMount() {
        API.getBooks()
          .then(res => this.setState(
            {
              books: res.data
            },
            console.log(res.data)
            )
          )
          .catch(err => console.log(err));
      }

      // loads all books
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data })
          )
          .catch(err => console.log(err));
      };

      // deletes a book
      handleDeleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    render() {
        return(
        <div className="container">
            {this.state.books.map(book => (
                  <SavedBook
                    key={book._id}
                    src={book
                      ? book.src
                      : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    title={book.title}
                    authors={book.authors.join(", ")}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                  />
                ))}
        </div>

        )

    }
}

export default SavedBooks;