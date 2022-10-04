import React from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './components/BookFormModal';
import BookCarousel from './components/BookCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
    }
  }

  handleShow = () => {
    this.setState({
      show: true,
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.addBook({
      title: e.target.title.value,
      author: e.target.author.value,
      description: e.target.description.value,
      status: e.target.status.value,
    });
  }

  addBook = async (bookInfo) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/books`, bookInfo);
      const newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook],
      })
    }
    catch (error) {
      console.log(error);
    }
    this.handleClose();
  }
  
  deleteBook = async (bookToDelete) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookToDelete}`);
      const filteredBooks = this.state.books.filter(book => {
        return book._id !== bookToDelete;
      });
      this.setState({
        books: filteredBooks,
      });
    } catch (error) {
      console.log('we have an error: ', error.response);
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  
  getBooks = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/books`;
      const response = await axios.get(url);
      this.setState({
        books: response.data
      })
    } catch (error) {
      console.log('we have an error ', error.response);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <Container className="mb-3 mt-3 d-flex flex-column justify-content-center align-items-center">
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button className="mt-2" variant="primary" onClick={this.handleShow}>
          Add a Book
        </Button>
        </Container>
        {this.state.show &&
          <BookFormModal 
            show={this.state.show} 
            handleClose={this.handleClose} 
            handleSubmit={this.handleSubmit} 
          />
        }
        {this.state.books.length ? (
          <BookCarousel
            books={this.state.books}
            deleteBook={this.deleteBook}
          />
        ) : (
          <p>There are no books in the database.</p>
        )}
      </>
    )
  }
}

export default BestBooks;
