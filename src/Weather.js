import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.cityOnLoad);
  const [weather, setWeather] = useState({ onSearch: false });
  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = `321b4521c1f43612aed7e4d3fbabd5d7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(showWeather);
  }
  function showWeather(response) {
    setWeather({
      onSearch: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
    });
  }
  const form = (
    <form className="mb-4" onSubmit={searchCity}>
      <div className="row">
        <div className="col-sm-7">
          <input
            type="search"
            placeholder="🔎 Search for a City"
            autoFocus="on"
            autoComplete="off"
            className="search-bar form-control bg-dark text-light"
            onChange={updateCity}
          />
        </div>
        <div className="col">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-outline-info submit-button"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            value="Current"
            className="form-control btn btn-outline-secondary submit-button"
          />
        </div>
      </div>
    </form>
  );
  if (weather.onSearch) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        {form}
        <div>
          <Loader
            className="d-flex justify-content-center"
            type="Rings"
            color="#F39C12"
            secondaryColor="#C74DED"
            height={300}
            width={200}
          />
        </div>
      </div>
    );
  }
}
