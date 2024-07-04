import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No data to display</div>;
  }

  const { temperature, humidity, precip, weather_descriptions, pressure } = weatherData;

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Precipitation: {precip}mm</p>
      <p>Description: {weather_descriptions.join(', ')}</p>
      <p>Pressure: {pressure} mb</p>
    </div>
  );
};

export default WeatherDisplay;