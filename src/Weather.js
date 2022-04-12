import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

  
 const [weatherData, setWeatherData] = useState({ ready: false });
 const [city, setCity] = useState(props.defaultCity); 

  function handleResponse(response) {

    setWeatherData ({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` 
  });
}
function search(){
  const apiKey = "5596812fa6646bbfaf224a9f62eed9c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event){
setCity(event.target.value);
}

  if (weatherData.ready) { 
    return ( 
<div className="Weather">
        
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
              
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  autocomplete="off"
                  className="form-control form"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
  
          <div className="overview">
            <WeatherInfo data={weatherData}/>
            
  
          
        </div>
       </div>
      
      );
  } else {
 search();
  return "Loading..."
  
};
}
 

  