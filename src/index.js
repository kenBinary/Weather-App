import "normalize.css";
import * as weather from "./weather-facilitator";
import weatherData from "./weather-data";

// console.log(await weather.getWeatherData("london"));
let y = await weather.getWeatherData("london");
// console.log(y);
let x = weatherData(y);
console.log(x.currentWeather);
console.log(x.weatherLocation);
console.log(x.foreCastArray);