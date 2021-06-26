import React from "react";
import "./Weather.css";

export default function DateAndTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours === 0) {
    hours = hours + 12;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = hours - 12;
    return (
      <span className="DateAndTime">
        <h2>
          Last updated:{" "}
          <span className="fw-normal">
            {day} {hours}:{minutes} PM
          </span>
        </h2>
      </span>
    );
  } else {
    return (
      <span className="DateAndTime">
        <h2>
          Last updated:
          <span className="fw-normal">
            {day} {hours}:{minutes} AM
          </span>
        </h2>
      </span>
    );
  }
}
