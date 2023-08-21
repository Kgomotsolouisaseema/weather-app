import React from 'react';
import { Card } from 'react-bootstrap';

function NewsCard({title , description , category }) {
  return (
   <Card  className='news-card'>
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title> Category:{category}</Card.Title>
        
        <hr/>
    </Card.Body>
    <br/>
   </Card>
  );
}

export default NewsCard;
