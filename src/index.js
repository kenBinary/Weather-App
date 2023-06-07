import "normalize.css";
import * as weather from "./weather-facilitator";
import weatherData from "./weather-data";
import * as displayData from "./weatherDataDisplay";
import loadLoader from "./loader";

// console.log(await weather.getWeatherData("london"));
// let y = await weather.getWeatherData("tokyo");
// // console.log(y);
// let x = weatherData(y);
// console.log(x.currentWeather);
// console.log(x.weatherLocation);
// console.log(x.forecastArray);

let weatherObject;
// initialize weather on website startup
loadLoader();
weather.getWeatherData("Cebu").then((response) => {
    weatherObject = weatherData(response);
    return weatherObject;
}).then((response) => {
    displayData.updateMainInfo(response.currentWeather, response.weatherLocation);
    displayData.updateForecastInfo(response.forecastArray);
    loadLoader();

});


// updates information on weather when search button is clicked
const searchLocation = document.querySelector("#search-location");
const searchValue = document.querySelector("#search-value");
searchLocation.addEventListener('click', () => {
    loadLoader();
    weather.getWeatherData(searchValue.value).then((response) => {
        weatherObject = weatherData(response);
        return weatherObject;
    }).then((response) => {
        displayData.updateMainInfo(response.currentWeather, response.weatherLocation);
        displayData.updateForecastInfo(response.forecastArray);
        searchValue.value = "";
        loadLoader();

    });
});

// toggle between inferior and superior measurment system
const toggle = document.querySelector(".switch-system");
toggle.addEventListener('click', () => {
    const currentSystem = document.querySelector(".system");
    let toggled = currentSystem.classList.toggle("change-system");
    if (toggled) {
        currentSystem.textContent = "F";
        displayData.updateSystem(toggled, weatherObject.currentWeather, weatherObject.forecastArray);
    }
    else {
        currentSystem.textContent = "C";
        displayData.updateSystem(toggled, weatherObject.currentWeather, weatherObject.forecastArray);
    }
});
