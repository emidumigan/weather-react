import React from "react";
const axios = require('axios').default; 

export default function Weather(props) {
    function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${response.date.main.temp}°C`);
}

let apiKey = "5596812fa6646bbfaf224a9f62eed9c6";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}