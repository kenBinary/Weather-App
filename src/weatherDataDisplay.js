// get condition along with icon
// get temp feels
// get avg temperature
// get date
// get country
// get region
import * as weather from "./weather-facilitator";
function updateMainInfo(currentWeather, weatherLocation) {
    const conditionIcon = document.querySelector(".condition-icon");
    const condition = document.querySelector(".condition");
    const tempFeels = document.querySelector(".temp-feels");
    conditionIcon.src = `https:${currentWeather.conditionIcon}`;
    condition.textContent = currentWeather.condition;
    tempFeels.textContent = currentWeather.feelsLike_C;

    const temperature = document.querySelector(".temperature");
    const localtime = document.querySelector(".localtime");
    const country = document.querySelector(".country");
    const region = document.querySelector(".region");

    temperature.textContent = currentWeather.temperature_C;
    localtime.textContent = weatherLocation.localtime;
    country.textContent = weatherLocation.country;
    region.textContent = weatherLocation.region;
}
function updateForecastInfo(forecastArray) {
    const forecastCards = Array.from(document.querySelector(".forecast").children);
    forecastCards.forEach((element, index) => {
        let cardDetails = Array.from(element.children);
        cardDetails[0].src = `https:${forecastArray[index].dayConditionIcon}`;
        cardDetails[1].textContent = forecastArray[index].dayCondition;
        cardDetails[2].textContent = forecastArray[index].avgTemp_C;
        cardDetails[3].textContent = forecastArray[index].date;
    });
}
export { updateMainInfo, updateForecastInfo }