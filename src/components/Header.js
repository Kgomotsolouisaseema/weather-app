import React, { useState, useEffect } from 'react';
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import "../index.css"

const Header = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (location.trim() !== '') {
      onSearch(location);
    }
  }, [location, onSearch]);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#">Weather and News App</Navbar.Brand>
        <Form inline className='custom-form'>
          <FormControl
            type="text"
            placeholder="Enter location"
            className="mr-sm-2 "
            value={location}
            onChange={handleInputChange}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
