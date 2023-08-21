import React from 'react';
import { Card } from 'react-bootstrap';

 function WeatherCard({location , temptreture ,description}) {

  return (
   <Card className='weather-card'>
    <Card.Body>
        <Card.Title>{location}</Card.Title>
        <Card.Text>Tempreture  : {temptreture}°C</Card.Text>
        <Card.Text>Description : {description}</Card.Text>
    </Card.Body>
   </Card>
  );
}

export default WeatherCard;
