import React, { useState } from 'react';
import { Image, Col, Form, Button } from 'react-bootstrap';

const Add = () => {
  const [pgDetails, setPgDetails] = useState({
    name: '',
    type: '',
    fee: '',
    latitude: '',
    longitude: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPgDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend or update state
    console.log(pgDetails); // For demonstration, log the data
  };

  return (
    <div>
      <Col style={{ marginLeft: `0em`, marginTop: `0em` }} xs={6} md={4} className="imageContainer">
        <Image style={{ width: `10em` }} className="image" src={require(`./images/logo.jpeg`)} rounded />
      </Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={pgDetails.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            value={pgDetails.type}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="fee">
          <Form.Label>Fee</Form.Label>
          <Form.Control
            type="text"
            name="fee"
            value={pgDetails.fee}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="latitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            name="latitude"
            value={pgDetails.latitude}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            name="longitude"
            value={pgDetails.longitude}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Add PG
        </Button>
      </Form>
    </div>
  );
};

export default Add;
