import React from 'react';

const WeatherCard = ({ location, temperature, description }) => {
  return (
    <div className='weather-card'>
      <div className='weather-card-body'>
        <h3 className='weather-card-title'>{location}</h3>
        <p className='weather-card-text'>Temperature: {temperature}°C</p>
        <p className='weather-card-text'>Description: {description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
