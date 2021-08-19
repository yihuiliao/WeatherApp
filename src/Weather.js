import React from "react";

const WeatherCard = ({weatherData}) => (
    <div>
            <p>{weatherData.name}</p>
            <p>{weatherData.weather[0].main}</p>
    </div>
)

export default WeatherCard