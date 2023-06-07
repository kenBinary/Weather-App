import "normalize.css";
import * as weather from "./weather-facilitator";
import weatherData from "./weather-data";
import * as displayData from "./weatherDataDisplay";

// console.log(await weather.getWeatherData("london"));
// let y = await weather.getWeatherData("tokyo");
// // console.log(y);
// let x = weatherData(y);
// console.log(x.currentWeather);
// console.log(x.weatherLocation);
// console.log(x.forecastArray);
const searchLocation = document.querySelector("#search-location");
const searchValue = document.querySelector("#search-value");

searchLocation.addEventListener('click', () => {
    weather.getWeatherData(searchValue.value).then((response) => {
        let weatherObject = weatherData(response);
        return weatherObject;
    }).then((response) => {
        displayData.updateMainInfo(response.currentWeather, response.weatherLocation);
    });
});