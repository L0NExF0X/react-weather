import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [onLoad, setOnLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data.daily);
    setOnLoad(true);
  }
  if (onLoad) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-2">
          {forecast.map(function (weeklyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={weeklyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `321b4521c1f43612aed7e4d3fbabd5d7`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
