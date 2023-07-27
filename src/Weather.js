import React from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="App">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"className="float-left" />
          <span className="temperature">6</span>
            <span className="unit">℃</span>
          </div>
          
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind:13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}