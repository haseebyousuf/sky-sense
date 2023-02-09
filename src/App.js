import { useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { TiWeatherSunny } from "react-icons/ti";
import {
    WiHumidity,
    WiStrongWind,
    WiThermometer,
    WiWindDeg,
} from "react-icons/wi";

import { getWeatherData } from "./weatherService";
function App() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const fetchData = async (city) => {
            const data = await getWeatherData(city);
            setWeather(data);
        };
        // fetchData(city);
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="search">
                    <input
                        placeholder="Search..."
                        type="text"
                        className="search-bar"
                    />
                    <button>
                        <AiOutlineSearch fontSize="1.5rem" />
                    </button>
                </div>
                <div className="weather">
                    <h2 className="city-name"> Weather in Srinagar</h2>
                    <h1 className="temp">tempC</h1>
                    <div className="weather-status">
                        <TiWeatherSunny fontSize="2rem" />
                        <div className="description">Cloudy</div>
                    </div>
                    <div className="details">
                        <p className="wind">
                            {" "}
                            <WiThermometer /> Feels Like: 6.2km/h
                        </p>
                        <p className="wind">
                            {" "}
                            <WiHumidity /> Humidity: 60%
                        </p>
                        <p className="wind">
                            {" "}
                            <WiStrongWind /> Wind Speed: 6.2km/h
                        </p>
                        <p className="wind">
                            {" "}
                            <WiWindDeg />
                            Pressure: 1025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
