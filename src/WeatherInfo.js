import React from "react";
import DateAndTime from "./DateAndTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main-info">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <DateAndTime date={props.data.date} />
        <h3>{props.data.description}</h3>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <img
            className="icon"
            src={props.data.icon}
            alt={props.data.description}
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="units-main">
            <a href="/">°F </a>|<a href="/">°C</a>
          </span>
        </div>
        <div className="col-6">
          <ul className="weather-conditions">
            <li>Feels like: {props.data.feelsLike}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
