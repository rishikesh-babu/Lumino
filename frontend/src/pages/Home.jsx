import React from 'react';

const buttonStyle = {
  background: '#ff6600',
  color: 'white',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
  display: 'inline-block',
  margin: '10px'
};

function Home() {
  return (
    <div>
      <header style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
      
        <h2>VISION INTO LIFE</h2>
        <a href="#services" style={buttonStyle}>Explore Our Services</a>
        <a href="#contact" style={buttonStyle}>Contact Us</a>
      </header>

      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Our Key Services</h2>
        <p>Bringing ideas to life through media production, live streaming, and digital marketing solutions.</p>

        <p>We specialize in media production, live streaming, digital marketing, and event management.</p>
      </div>
    </div>
  );
}

export default Home;
