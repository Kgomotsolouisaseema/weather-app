import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ title, description, category }) => (
  <Card className='news-card'>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Title>{description}</Card.Title>
      <Card.Title>Category: {category}</Card.Title>
      <hr />
    </Card.Body>
    <br />
  </Card>
);

export default NewsCard;
