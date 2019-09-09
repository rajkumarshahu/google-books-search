import React, {Component} from 'react';
import SavedBook from "../components/SavedBook";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import alertify from 'alertifyjs'

class SavedBooks extends Component {
    state = {
        books: [],
        alert: ""
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
        // .then(res =>  alertify.confirm("Are you sure you want to delete this book !!!", function(){
        //   alertify.success('Ok')

        // }

        // ))
        .then(res => this.loadBooks())

          .catch(err => console.log(err));
      }
    render() {
        return(

        <div>
        <Jumbotron />

        <div className="container">
            {this.state.books.map((book, i) => (

                  <SavedBook
                    index = {i + 1}
                    key={book._id}
                    src={book
                      ? book.src
                      : "https://www.seekclipart.com/clipng/middle/325-3257121_ruler-clipart-book-green-book-icon-png-transparent.png"}
                    title={book.title}
                    authors={book.authors.join(", ")}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                    alertMessesage = {this.state.alert}
                  />


                ))}

                </div>
        </div>

        )

    }
}

export default SavedBooks;