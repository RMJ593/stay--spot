import React from 'react';
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
    navigate('/main'); 
  };

  return (
    <div>
      <div className="container-bg">
        <img style={{ height: '47em', width: '100%' }} src={require('./images/login.jpeg')} alt="Background" />
      </div>

      <h1 style={{ marginTop: '-12em', marginLeft: '40%', fontSize: '3.5em' }}>About Us</h1>
      <p
        style={{
          fontWeight: 'bolder',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.25em',
          marginTop: '1em',
        }}
      >
        Welcome to StaySpot! We are dedicated to helping you find the perfect hostel and PG accommodations for you. Whether
        you're new here and want to explore a new city, our platform provides a convenient and reliable way to discover
        and book hostels. Our mission is to connect newcomers with a wide range of hostels and PGs, ensuring they have a
        comfortable and enjoyable stay. We understand the importance of finding the right hostel that fits your budget,
        location preferences, and desired amenities. With our user-friendly search interface and comprehensive hostel
        listings, you can easily find the ideal place to stay. Our team works tirelessly to curate a diverse selection of
        hostels and PGs, vetting each property to ensure quality and safety. We also provide detailed information about
        each hostel, including photos, reviews, and amenities, to help you make an informed decision.
      </p>
      <h5 style={{ marginRight: '50%' }}>Login with your credentials</h5>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;