import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import { Button, Image, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
    <header className="header">
      <Col style={{marginLeft:`44em`,marginTop:`5em`}} xs={4} md={3} className="imageContainer">
        <Image style={{ width: '40em', height: '35em' }}className="image" src={require(`./images/intro.jpg`)} rounded />
      </Col>
      <Col style={{marginLeft:`10em`,marginTop:`-35em`}} xs={6} md={4} className="imageContainer">
        <Image style={{width:`30em`}}className="image" src={require(`./images/logo.jpeg`)} rounded />
      </Col>
      <h4 style={{marginLeft:`12em`,marginTop:`-1em`}}>Find a suitable spot to stay</h4>
      <Link to="./Login">
       <Button style={{marginLeft:`23em`,marginTop:`2em`}} variant="dark" className="button">Know More</Button>
      </Link>
    </header>
    </div>
  )
}

export default Home