const API_KEY = process.env.REACT_APP_KEY;

const makeIconUrl = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`;

export const getWeatherData = async (city, units = "metric") => {
    let response;
    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
        response = await fetch(URL);
        const data = await response.json();
        const {
            name,
            weather,
            main: { temp, feels_like, humidity, pressure },
            wind: { speed },
        } = data;

        const { description, icon } = weather[0];

        return {
            name,
            temp,
            iconUrl: makeIconUrl(icon),
            description,
            feels_like,
            humidity,
            pressure,
            speed,
        };
    } catch (error) {
        return response;
    }
};
