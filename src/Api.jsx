// src/ApiPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'London'; // You can change the city as needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          setError(`Error: ${error.response.data.message} (Status code: ${error.response.status})`);
        } else if (error.request) {
          // The request was made but no response was received
          setError('Error: No response received from the server');
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${error.message}`);
        }
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <nav className="navigation">
      <div className="logo">WAARID<IoRestaurantSharp />RESTAURANT </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cafe">Cafe</Link>
        <Link to="/api">API</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/card">Cards</Link>
        <li><Link to="/cart" className="cart-icon"><FaCartPlus /></Link></li>
        {/* <Link to="/cart"><FaCartPlus /></Link> */}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
    <div>
      <h1>Weather Data for {weather.name}</h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
    </>
  );
}

export default Api;
