import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('show weather', weather)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://api.weatherstack.com/current?query=Rio de Janeiro&access_key=9e5a42dea2e493e4176f3723994abb9d');
        setWeather(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clima em {weather ? weather?.location?.name || "Rio de Janeiro" : null}, {weather ? weather?.location?.country || "Brazil" : null}
        </p>

        {/* <img src="/moon.png" alt="Lua Minguante" /> */}

        <p>Temperatura: {weather ? weather?.current?.temperature || 20 : null}°C</p>
        <p>Vento: {weather ? weather?.current?.wind_speed || 6 : null}kmph</p>
        <p>Precipitação: {weather ? weather?.current?.precip || 0 : null}mm</p>
        <p>Pressão: {weather ? weather?.current?.pressure || 0 : null}mb</p>
      </header>
    </div>
  );
}

export default App;
