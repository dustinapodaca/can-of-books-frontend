import React from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './components/BookFormModal';
import BookCarousel from './components/BookCarousel';
import UpdateBookFormModal from './components/UpdateBookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedBook: {},
      show: false,
      showUpdate: false,
    }
  }

  handleShow = () => {
    this.setState({
      show: true,
    })
  }

  handleShowUpdate = (selectedBook) => {
    this.setState({
      showUpdate: true,
      selectedBook: selectedBook,
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
      showUpdate: false,
    })
  }

  handleAddSubmit = async (e) => {
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

  //Update Book

  handleUpdateSubmit = async (e) => {
    e.preventDefault();
    this.updateBook({
      title: e.target.title.value || this.state.selectedBook.title,
      author: e.target.author.value || this.state.selectedBook.author,
      description: e.target.description.value || this.state.selectedBook.description,
      status: e.target.status.value || this.state.selectedBook.status,
      _id: this.state.selectedBook._id,
      __v: this.state.selectedBook.__v,
    });
  }

  updateBook = async (bookToUpdate) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      const response = await axios.put(url, bookToUpdate);
      const updatedBook = response.data;
      const updatedBookArr = this.state.books.map(book => {
        return book._id === updatedBook.data._id ? updatedBook.data : book;
      
      });
      this.setState({
        books: updatedBookArr,
      });
    } catch (error) {
      console.log('we have an error: ', error.response);
    }
    this.handleClose();
  }

  // component did mount

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
          <>
            <BookFormModal 
              show={this.state.show} 
              handleClose={this.handleClose} 
              handleAddSubmit={this.handleAddSubmit} 
            />
          </>
        }
        {this.state.showUpdate &&
          <>
            <UpdateBookFormModal
              showUpdate={this.state.showUpdate}
              handleClose={this.handleClose}
              handleUpdateSubmit={this.handleUpdateSubmit}
              selectedBook={this.state.selectedBook}
            />
          </>
        }
        {this.state.books.length ? (
          <BookCarousel
            handleShow={this.handleShowUpdate}
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
