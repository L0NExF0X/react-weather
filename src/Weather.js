import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function Weather(props) {
  function showTemperature(response) {
    alert(
      `The weather in ${response.data.name} is currently ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = `321b4521c1f43612aed7e4d3fbabd5d7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
  return (
    <Loader
      type="MutatingDots"
      color="#F39C12"
      secondaryColor="#C74DED"
      height={100}
      width={100}
    />
  );
}

export default Weather;
