import React from 'react';
import { Container, Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Modal show={this.props.showUpdate} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.handleUpdateSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.selectedBook.title}
                    name="title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.selectedBook.author}
                    name="author"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter A New Book Description"
                    name="description"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Update Book Status</Form.Label>
                  <Form.Select id="status" name="status">
                    <option value="Available">Available</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Unavailable">Unavailable</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update Book
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    )
  }
}

export default BookFormModal;