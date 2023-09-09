import React, { useState } from 'react';
import { imagesData } from './images.data';
import { Card, Button, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMapsLink from './GoogleMapsLink';

const Main = () => {
  const [items] = useState(imagesData);

  return (
    <div>
      <Col style={{ marginLeft: '0em', marginTop: '0em' }} xs={6} md={4} className="imageContainer">
        <Image style={{ width: '10em' }} className="image" src={require(`./images/logo.jpeg`)} rounded />
      </Col>
      <img style={{ marginLeft: '84em', marginTop: '-8em', width: '3em', borderRadius: '50%' }} src={localStorage.getItem('profilePic')} alt="User Profile"/>
      <Link to="/add">
        <Button style={{ marginLeft: '80em', marginTop: '-11em' }} variant="dark" className="button">
          +
        </Button>
      </Link>
      <h1 style={{ marginTop: '-1.5em' }}>Hey {localStorage.getItem('name')}! We have a list of accommodations for you</h1>
      {items.map((item) => (
        <div className="d-inline-flex" style={{ marginTop: '2%' }} key={item.Name}>
          <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img
              style={{ height: '15rem' }}
              className="p-2"
              variant="top"
              src={require(`./New folder/${item.Image}.jpeg`)}
              alt={item.Name} 
            />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h3>Fee: ₹{item.Fee}</h3>
              
              <GoogleMapsLink>
                latitude={item.latitude}
                longitude={item.longitude}
              </GoogleMapsLink>
             
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Main;
