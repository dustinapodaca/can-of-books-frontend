import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookCarousel extends React.Component {
  render() {
    return (
      <Container>
        <Carousel className='h-50 rounded-bottom mb-5 bg-dark rounded'>
          {this.props.books.map((book) => {
            return (
              <Carousel.Item>
                <>
                  <div className="pb-5 mb-5">
                    <img className="d-block w-50 mx-auto" src='https://www.nirah.com/images/item-placeholder.svg?id=498f4e96baf0bbbc9351' alt={book.title} />
                  </div>
                </>
                <Carousel.Caption id="carouselText" className='bg-dark mx-auto bg-opacity-50 rounded-bottom'>
                  <>
                    <div>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                    </div>
                    <Button 
                      className="mb-3 p-1 px-3"
                      variant="danger" 
                      onClick={() => this.props.deleteBook(book._id)}
                      >Delete Book
                    </Button>
                  </>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
    )
  }
}

export default BookCarousel;
