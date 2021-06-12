import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This app was coded by{" "}
        <a
          href="https://www.linkedin.com/in/katie-p%C3%A9rez-0a8655209/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile - Katie Pérez"
        >
          Katie Pérez
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/L0NExF0X/react-weather"
          target="_blank"
          rel="noreferrer"
          title="GitHub Repository"
        >
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}
