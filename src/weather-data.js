// INFORMATION ON CURRENT WEATHER
// weather condition
// feels like in C and F
// tempearture in C and F
// 

// INFORMATION ON SELECTED LOCATION
// country
// localtime
// region

// INFORMATION ON FORECAST
// date
// avg temp in C and F
// weather condition
// 

const weatherData = (weatherObject) => {
    let forecastArray = [];
    let currentWeather = {
        "condition": weatherObject.current.condition.text,
        "conditionIcon": weatherObject.current.condition.icon,
        "feelsLike_C": weatherObject.current.feelslike_c,
        "feelsLike_F": weatherObject.current.feelslike_f,
        "temperature_C": weatherObject.current.temp_c,
        "temperature_F": weatherObject.current.temp_f,
    };
    let weatherLocation = {
        "country": weatherObject.location.country,
        "localtime": weatherObject.location.localtime,
        "region": weatherObject.location.region
    };
    weatherObject.forecast.forecastday.forEach((dayForecast) => {
        forecastArray.push(
            {
                "date": dayForecast.date,
                "avgTemp_C": dayForecast.day.avgtemp_c,
                "avgTemp_F": dayForecast.day.avgtemp_f,
                "dayCondition": dayForecast.day.condition.text,
                "dayConditionIcon": dayForecast.day.condition.icon
            }
        )
    });
    return { currentWeather, weatherLocation, forecastArray };
};
export default weatherData;