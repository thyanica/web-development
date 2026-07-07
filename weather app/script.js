import getWeather from "./api.js";

const cityInput = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const condition = document.getElementById("condition");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const error = document.getElementById("error");


const displayWeather = async () => {

    const city = cityInput.value.trim();

    if(city===""){

        error.innerHTML="Please enter a city name.";

        return;
    }

    error.innerHTML="";

    try{

        const data = await getWeather(city);

        if(data.cod!=200){

            cityName.innerHTML="";
            temperature.innerHTML="";
            condition.innerHTML="";
            humidity.innerHTML="";
            wind.innerHTML="";

            error.innerHTML="City not found.";

            return;
        }

        const {

            name,

            main,

            weather,

            wind:windData

        } = data;

        cityName.innerHTML=name;

        temperature.innerHTML=`Temperature : ${main.temp} °C`;

        condition.innerHTML=`Condition : ${weather[0].main}`;

        humidity.innerHTML=`Humidity : ${main.humidity}%`;

        wind.innerHTML=`Wind Speed : ${windData.speed} m/s`;

    }

    catch{

        error.innerHTML="Something went wrong.";

    }

}

searchBtn.addEventListener("click",displayWeather);