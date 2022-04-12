import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

  
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){

    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: "http://openweathermap.org/img/wn/02n@2x.png",
   
  });

  }

  if (weatherData.ready) { 
    return ( 
<div className="Weather">
        <div className="wrapper">
          <form className="search-form nb-3">
            <div className="row">
              <div className="col-9">
              
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  autocomplete="off"
                  className="form-control form"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
  
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li className="date"><FormattedDate date={weatherData.date} /></li>
              <li className="weather-condition text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
  
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-letf"
            />
            <span className="float-right ">
              <strong>{weatherData.Temperature}</strong>
              <span className="units">°C</span>
            </span>
          </div>
  
          <div className="weather-descriptions">
            <div className="row justify-content-center">
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Wind</div>
                <div className="description">
                  <span>{weatherData.wind}</span>km/h
                </div>
              </div>
  
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Humidity</div>
                <div className="description">
                  <span>{weatherData.humidity}</span>%
                </div>
              </div>
  
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Temperature</div>
                <div className="description">
                  <strong>
                    <span>{weatherData.temperature}</span>°
                  </strong>{" "}
                  | <span></span>°
                </div>
              </div>
            </div>
          </div>
  
          
        </div>
       
      </div>
      );
  } else {
  const apiKey = "5596812fa6646bbfaf224a9f62eed9c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "Loading..."
  
};
}
 

  