import React from "react";
import WeatherDetails from "./WeatherDetails";

const Weather = ({ weather }) => {
    return (
        <div className="weather">
            <h2 className="city-name"> Weather in {weather.name}</h2>
            <h1 className="temp">{Math.round(weather.temp)} °C</h1>
            <div className="weather-status">
                <img src={weather.iconUrl} alt="weather-icon" />
                <div className="description">{weather.description}</div>
            </div>
            <WeatherDetails weather={weather} />
        </div>
    );
};

export default Weather;
