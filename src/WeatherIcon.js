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
        color="#1fa6c1"
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
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "09n": (
      <WiNightAltShowers
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "010d": (
      <WiDayRain
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "010n": (
      <WiNightAltRain
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "011d": (
      <WiDayThunderstorm
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "011n": (
      <WiNightAltThunderstorm
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "013d": (
      <WiSnowflakeCold
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "013n": (
      <WiSnowflakeCold
        size={props.size}
        color="#0dcaf0"
        className={props.className}
      />
    ),
    "050d": (
      <WiDayFog size={props.size} color="#0dcaf0" className={props.className} />
    ),
    "050n": (
      <WiNightFog
        size={props.size}
        color="#9f9da0"
        className={props.className}
      />
    ),
  };
  return <span>{codeMapping[props.code]}</span>;
}
