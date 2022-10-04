import React from 'react';
import { Container, Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Book Title" 
                    name="title" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Name of Author" 
                    name="author" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Book Description"
                    name="description"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Book Status</Form.Label>
                  <Form.Select id="status" name="status">
                    <option value="Available">Available</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Unavailable">Unavailable</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Add Book
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