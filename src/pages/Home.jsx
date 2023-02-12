import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

import Form from "./../components/Form";
import Weather from "./../components/Weather";

import { getWeatherData } from "./../weatherService";

const Home = () => {
    // states
    const [loader, setLoader] = useState(false);
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);

    //fetch data from API
    useEffect(() => {
        const fetchData = async (city) => {
            setLoader(true);
            const data = await getWeatherData(city);
            if (data.ok === false) {
                alert("There is some error!!! Try Again");
                setLoader(false);
            } else {
                setWeather(data);
                setLoader(false);
            }
        };
        if (city) {
            fetchData(city);
        }
    }, [city]);
    return (
        <div className="container">
            <div className="card">
                <Form setCity={setCity} setLoader={setLoader} />
                {weather ? (
                    <Weather weather={weather} />
                ) : (
                    loader && (
                        <SyncLoader
                            color="#2f6ed3"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "10px",
                            }}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
