import { useEffect, useState } from "react";


import Form from "./components/Form";
import Weather from "./components/Weather";

import { getWeatherData } from "./weatherService";
function App() {
    // states
    const [city, setCity] = useState("srinagar");
    const [weather, setWeather] = useState(null);

    //fetch data from API
    useEffect(() => {
        const fetchData = async (city) => {
            const data = await getWeatherData(city);
            setWeather(data);
        };
        fetchData(city);
    }, [city]);

    return (
        <div className="container">
            <div className="card">
                <Form setCity={setCity} />
                {weather && <Weather weather={weather} />}
            </div>
        </div>
    );
}

export default App;
