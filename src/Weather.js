import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity(event) {
    event.preventDefault();
    let apiKey = `321b4521c1f43612aed7e4d3fbabd5d7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(showWeather);
  }
  function showWeather(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      date: formatDate(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function formatDate() {
    let now = new Date();
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[now.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  const form = (
    <form className="mb-3" onSubmit={searchCity}>
      <div className="row">
        <div className="col-sm-7">
          <input
            type="search"
            placeholder="🔎 Search for a City"
            autoFocus="on"
            autoComplete="off"
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary submit-button"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            value="Current"
            className="form-control submit-button"
          />
        </div>
      </div>
    </form>
  );

  if (weather) {
    return (
      <div className="Weather">
        {form}
        <div className="main-info">
          <h1>
            {weather.city}, {weather.country}
          </h1>
          <h2>Last updated: {weather.date}</h2>
          <h3>{weather.description}</h3>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 d-flex">
            <img
              className="icon"
              src={weather.icon}
              alt={weather.description}
            />
            <h2>
              <span className="temperature">{weather.temperature}</span>
              <span className="temp-main">
                <a href="/">°F </a>|<a href="/">°C</a>
              </span>
            </h2>
          </div>
          <div className="col-6">
            <p className="weather-conditions">
              Feels like: {weather.feelsLike}
              <br />
              Humidity: {weather.humidity}%
              <br />
              Wind speed: {weather.wind}mph
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
        <Loader
          className="d-flex justify-content-center"
          type="MutatingDots"
          color="#F39C12"
          secondaryColor="#C74DED"
          height={100}
          width={100}
        />
      </div>
    );
  }
}

export default Weather;
