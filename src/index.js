import "normalize.css";
import * as weather from "./weather-facilitator";

console.log(await weather.getWeatherData("london"));