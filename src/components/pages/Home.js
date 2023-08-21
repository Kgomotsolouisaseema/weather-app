import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Header from '../Header';
import WeatherCard from '../WeatherCard';
import NewsCard from '../NewsCard';
import  bigtree from '../assets/bigtreeweather.jpg'



function Home() {
//sampl data
 const weatherData = {
    location :'sample location' ,
    tempreture : 25,
    description : 'Partly Cloud ',
 };

 const newsData = [
    {
    title : 'Sample News Title 1' ,
    description : 'hello my name is kgomotso',
    category :'Technology',
},
{
    title : 'Sample News Title 1' ,
    description : 'hello my name is other news',
    category :'Politics',
},

 ];
 
 
    return (
        <div style={{backgroundImage : `url(${bigtree})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Header/>
            <Container>
                <Row>
                    <Col md={7}>
                        <WeatherCard {...weatherData}/>
                    </Col>
                    <br/>
                    <Col md={7}>
                        {newsData.map((news ,index)=>(
                            
                            <NewsCard key={index}{...news}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
   
  );
}

export default Home;
