//get weather based on location
//send weather from request
//parse weather data from json to object

async function getWeatherData(location) {
    const weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e10f38eaf56c4afbaec120146230406&q=${location}&days=7&aqi=yes&alerts=yes`);
    const weatherData = weather.json();
    return weatherData;
}
export { getWeatherData }