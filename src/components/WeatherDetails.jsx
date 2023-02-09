import React from "react";
import {
    WiHumidity,
    WiStrongWind,
    WiThermometer,
    WiWindDeg,
} from "react-icons/wi";

const WeatherDetails = ({ weather }) => {
    return (
        <div className="details">
            <p>
                {" "}
                <WiThermometer /> Feels Like: {Math.round(
                    weather.feels_like
                )}{" "}
                °C
            </p>
            <p>
                {" "}
                <WiStrongWind /> Wind Speed: {weather.speed} m/s
            </p>
            <p>
                {" "}
                <WiWindDeg />
                Pressure: {weather.pressure} hPa
            </p>
            <p>
                {" "}
                <WiHumidity /> Humidity: {weather.humidity}%
            </p>
        </div>
    );
};

export default WeatherDetails;
