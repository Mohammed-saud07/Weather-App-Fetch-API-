const API_KEY = "ae8b64ad7fbd39036f56c6b7c7f97bf1";

let currentTempC = null;
let isCelsius = true;
async function getWeather() {

    const city = document.getElementById("city").value;

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if(response.status === 404){
            showError("City not found");
            return;
        }

        const data = await response.json();

        displayWeather(data);

    }
    catch(error){
        showError("Internet connection issue");
    }
}
function displayWeather(data){

    currentTempC = data.main.temp;

    document.getElementById("cityName").innerHTML =
        data.name;

    document.querySelector(".temp").innerHTML =
        currentTempC + " °C";

    document.querySelector(".description").innerHTML =
        data.weather[0].description;

    document.getElementById("humidity").innerHTML =
        data.main.humidity;

    document.getElementById("wind").innerHTML =
        data.wind.speed;

    document.getElementById("error").innerHTML = "";
}
function toggleUnit(){

    if(currentTempC === null)
        return;

    let displayTemp;

    if(isCelsius){

        displayTemp =
            (currentTempC * 9/5) + 32;

        document.querySelector(".temp").innerHTML =
            displayTemp.toFixed(1) + " °F";

        isCelsius = false;
    }
    else{

        document.querySelector(".temp").innerHTML =
            currentTempC.toFixed(1) + " °C";

        isCelsius = true;
    }
}
function showError(message){

    document.getElementById("error").innerHTML =
        message;
}
function showError(message){

    document.getElementById("error").innerHTML =
        message;
}