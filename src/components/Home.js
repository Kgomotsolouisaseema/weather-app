import React, { useState } from 'react';
// import { Container, Row, Col, Form,FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import NewsCard from '../components/NewsCard';
import bigtree from '../assets/bigtreeweather.jpg';
import '../index.css'



function Home() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [newsData, setNewsData] = useState([]);

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ad11e03c6279a2da7b49dcb6136c542f`;
  
    // Replace the newsApiUrl with your actual news API endpoint
    const newsApiUrl = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=018ab5e1d2924cf788f6b9303706e653`;

    // Function to fetch Weather data
    const fetchWeather = (event) => {
        if (event.key === 'Enter') {
            axios.get(weatherApiUrl)
                .then((response) => {
                    setWeatherData(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
            setLocation('');
        }
    };

    // Function to fetch News data
    const fetchNews = async () => {
        try {
            const response = await axios.get(newsApiUrl);
            setNewsData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

  
        return (
  <div style={{ backgroundImage: `url(${bigtree})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <Header />
    <div>
      <form className="custom-form">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={fetchWeather}
          
        />
      </form>
      <button className='buttonnews' type="button"  onClick={fetchNews}> Fetch News</button>
      <div className="flex-container">
        <div className="flex-item">
          <WeatherCard {...weatherData} />
        </div>
        <div className="flex-item">
          {newsData.map((news, index) => (
            <NewsCard key={index} newsItem={news} className="news-card" />
          ))}
        </div>
      </div>
    </div>
          
  </div>
);


}
export default Home;
