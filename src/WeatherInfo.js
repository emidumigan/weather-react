import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            
         <h1>{props.data.city}</h1>
            <ul>
              <li className="date"><FormattedDate date={props.data.date} /></li>
              <li className="weather-condition text-capitalize">{props.dataata.description}</li>
            </ul>
      
  
          <div className="clearfix weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-letf"
            />
            <span className="float-right ">
              <strong>{props.data.Temperature}</strong>
              <span className="units">°C</span>
            </span>
          </div>
  
          <div className="weather-descriptions">
            <div className="row justify-content-center">
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Wind</div>
                <div className="description">
                  <span>{props.data.wind}</span>km/h
                </div>
              </div>
  
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Humidity</div>
                <div className="description">
                  <span>{props.data.humidity}</span>%
                </div>
              </div>
  
              <div className="col-md-4 weather-descriptions-box">
                <div className="desctiption-title">Temperature</div>
                <div className="description">
                  <strong>
                    <span>{props.data.temperature}</span>°
                  </strong>{" "}
                  | <span></span>°
                </div>
              </div>
            </div>
          </div>
          </div>
    )
}