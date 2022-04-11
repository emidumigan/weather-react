import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "Melbourne",
      date: "Friday 17:16",
      condition: "Clear Sky",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: "22",
      wind: "2",
      humidity: "90",
      minTemp: "16",
      maxTemp: "23"
    };
  
    return (
      
      <div classNAme="Weather">
        
       
        <div className="wrapper">
          <form classNAme="search-form nb-3">
            <div classNAme="row">
              <div classNAme="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autofocus="on"
                  autocomplete="off"
                  classNAme="form-control form"
                />
              </div>
              <div classNAme="col-3">
                <input
                  type="submit"
                  value="Search"
                  classNAme="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
  
          <div classNAme="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li classNAme="date">{weatherData.date}</li>
              <li classNAme="weather-condition">{weatherData.condition}</li>
            </ul>
          </div>
  
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.condition}
              className="float-letf"
            />
            <span className="float-right ">
              <strong>{weatherData.temperature}</strong>
              <span className="units">°C</span>
            </span>
          </div>
  
          <div className="weather-descriptions" id="description">
            <div className="row justify-content-center">
              <div classNAme="col-md-4 weather-descriptions-box">
                <div classNAme="desctiption-title">Wind</div>
                <div classNAme="description">
                  <span>{weatherData.wind}</span>km/h
                </div>
              </div>
  
              <div classNAme="col-md-4 weather-descriptions-box">
                <div classNAme="desctiption-title">Humidity</div>
                <div classNAme="description">
                  <span>{weatherData.humidity}</span>%
                </div>
              </div>
  
              <div classNAme="col-md-4 weather-descriptions-box">
                <div classNAme="desctiption-title">Temperature</div>
                <div classNAme="description">
                  <strong>
                    <span>{weatherData.maxTemp}</span>°
                  </strong>{" "}
                  | <span>{weatherData.minTemp}</span>°
                </div>
              </div>
            </div>
          </div>
  
          
        </div>
       
      </div>
    );
  }