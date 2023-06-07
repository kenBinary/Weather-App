import * as dateFns from "date-fns";
// get condition along with icon
// get temp feels
// get avg temperature
// get date
// get country
// get region
// updates main information display
function updateMainInfo(currentWeather, weatherLocation) {
    const conditionIcon = document.querySelector(".condition-icon");
    const condition = document.querySelector(".condition");
    const tempFeels = document.querySelector(".temp-feels");
    conditionIcon.src = `https:${currentWeather.conditionIcon}`;
    condition.textContent = currentWeather.condition;
    tempFeels.textContent = currentWeather.feelsLike_C + "\u00B0" + "C";

    const temperature = document.querySelector(".temperature");
    const localtime = document.querySelector(".localtime");
    const country = document.querySelector(".country");
    const region = document.querySelector(".region");

    temperature.textContent = currentWeather.temperature_C + "\u00B0" + "C";
    localtime.textContent = dateFns.format(new Date(weatherLocation.localtime), "MMMM do y");
    country.textContent = weatherLocation.country;
    region.textContent = weatherLocation.region;
}
// updates forecast information display
function updateForecastInfo(forecastArray) {
    const forecastCards = Array.from(document.querySelector(".forecast").children);
    forecastCards.forEach((element, index) => {
        let cardDetails = Array.from(element.children);
        cardDetails[0].src = `https:${forecastArray[index].dayConditionIcon}`;
        cardDetails[1].textContent = forecastArray[index].dayCondition;
        cardDetails[2].textContent = forecastArray[index].avgTemp_C + "\u00B0" + "C";
        cardDetails[3].textContent = dateFns.format(new Date(forecastArray[index].date), "MMMM do y");
    });
}
function updateSystem(isFahrenheit, currentWeather, forecastArray) {
    if (isFahrenheit) {
        // update system on main card
        const TempFeels = document.querySelector(".temp-feels");
        const Temperature = document.querySelector(".temperature");
        TempFeels.textContent = currentWeather.feelsLike_F + "\u00B0" + "F";
        Temperature.textContent = currentWeather.temperature_F + "\u00B0" + "F";
        // udpate system on forecast card
        const forecastCards = Array.from(document.querySelector(".forecast").children);
        forecastCards.forEach((element, index) => {
            let cardDetails = Array.from(element.children);
            cardDetails[2].textContent = forecastArray[index].avgTemp_F + "\u00B0" + "F";
        });
    }
    else {
        // update system on main card
        const TempFeels = document.querySelector(".temp-feels");
        const Temperature = document.querySelector(".temperature");
        TempFeels.textContent = currentWeather.feelsLike_C + "\u00B0" + "C";
        Temperature.textContent = currentWeather.temperature_C + "\u00B0" + "C";
        // udpate system on forecast card
        const forecastCards = Array.from(document.querySelector(".forecast").children);
        forecastCards.forEach((element, index) => {
            let cardDetails = Array.from(element.children);
            cardDetails[2].textContent = forecastArray[index].avgTemp_C + "\u00B0" + "C";
        });
    }

}
export { updateMainInfo, updateForecastInfo, updateSystem }