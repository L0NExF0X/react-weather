import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units-main">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="units-main">
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
          |°C
        </span>
      </span>
    );
  }
}
