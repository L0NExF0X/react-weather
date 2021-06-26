import React from "react";
import DateAndTime from "./DateAndTime";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main-info">
        <h1>
          {props.data.city} <span className="fs-4">{props.data.country}</span>
        </h1>
        <DateAndTime date={props.data.date} />
        <h3>{props.data.description}</h3>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6 text-nowrap">
          <div className="current-weather">
            <WeatherIcon
              className="big-icon"
              code={props.data.icon}
              size={100}
            />
            <WeatherTemp fahrenheit={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm-6">
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
