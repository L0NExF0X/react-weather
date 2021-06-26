import React from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="units-main">°F</span>
    </span>
  );
}
