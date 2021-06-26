import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <h4>{day()}</h4>
      <WeatherIcon
        className="small-icon"
        size={80}
        code={props.data.weather[0].icon}
      />
      <p>
        {maxTemp()}° <span className="text-muted ms-2">{minTemp()}°</span>
      </p>
    </div>
  );
}
