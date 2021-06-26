import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiDayRain,
  WiNightAltRain,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiSnowflakeCold,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": (
      <WiDaySunny
        size={props.size}
        color="#ffc107"
        className={props.className}
      />
    ),
    "01n": (
      <WiNightClear
        size={props.size}
        color="#dc7bf7"
        className={props.className}
      />
    ),
    "02d": (
      <WiDayCloudy
        size={props.size}
        color="#f1f754"
        className={props.className}
      />
    ),
    "02n": (
      <WiNightAltCloudy
        size={props.size}
        color="#9854ad"
        className={props.className}
      />
    ),
    "03d": (
      <WiCloud size={props.size} color="#0dcaf0" className={props.className} />
    ),
    "03n": (
      <WiCloud size={props.size} color="#0dcaf0" className={props.className} />
    ),
    "04d": (
      <WiCloudy size={props.size} color="#0dcaf0" className={props.className} />
    ),
    "04n": (
      <WiCloudy size={props.size} color="#0dcaf0" className={props.className} />
    ),
    "09d": (
      <WiDayShowers
        size={props.size}
        color="#90dde5"
        className={props.className}
      />
    ),
    "09n": (
      <WiNightAltShowers
        size={props.size}
        color="#90dde5"
        className={props.className}
      />
    ),
    "10d": (
      <WiDayRain
        size={props.size}
        color="#bbb0c1"
        className={props.className}
      />
    ),
    "10n": (
      <WiNightAltRain
        size={props.size}
        color="#bbb0c1"
        className={props.className}
      />
    ),
    "11d": (
      <WiDayThunderstorm
        size={props.size}
        color="#978f9b"
        className={props.className}
      />
    ),
    "11n": (
      <WiNightAltThunderstorm
        size={props.size}
        color="#978f9b"
        className={props.className}
      />
    ),
    "13d": (
      <WiSnowflakeCold
        size={props.size}
        color="#c6edf2"
        className={props.className}
      />
    ),
    "13n": (
      <WiSnowflakeCold
        size={props.size}
        color="#c6edf2"
        className={props.className}
      />
    ),
    "50d": (
      <WiDayFog size={props.size} color="#c6c4c6" className={props.className} />
    ),
    "50n": (
      <WiNightFog
        size={props.size}
        color="#c6c4c6"
        className={props.className}
      />
    ),
  };
  return <span>{codeMapping[props.code]}</span>;
}
