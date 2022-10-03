import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={book.image_url}
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>There are no books in the database.</p>
        )}
      </>
    )
  }
}

export default BestBooks;
