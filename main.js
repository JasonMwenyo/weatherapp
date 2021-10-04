let cityName = document.getElementById("cityName");
const apiKey = "fXhAVKDfHo3e7GCF4AueEwhuFNF9X6cq"; 
let q;
const letters = /^[A-Za-z]+$/; //Might need to allow users to enter space


addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        if(cityName.value.match(letters)){
            q = cityName.value;
            cityNameDisplay(q);
            searchTempKey(q);
            searchWeatherKey(q);
        } else {
            console.log("Wrong");
        }
    }
});

// Displays City name in DOM
function cityNameDisplay(q){
    document.getElementById("city").innerHTML = q;
}

// This function pulls the City key
function searchTempKey(q){
    let locationKey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    .then(data => { return locationKey = data[0].Key})
    .then(locationKey => getTemperature(locationKey))      
}

// Pulls the temperature
function getTemperature(locationKey){
    let temp;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => temp = (data[0].Temperature.Metric.Value + "°" + data[0].Temperature.Metric.Unit))
    .then((temp) => document.getElementById("temperature").innerHTML = temp);
}


// Pulls city key for weather function
function searchWeatherKey(q){
    let locationKey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    .then(data => { return locationKey = data[0].Key})
    .then(locationKey => getWeatherText(locationKey))      
}

// Pulls current weather condition eg. Clear / Sunny
function getWeatherText(locationKey){
    let weatherText;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => weatherText = (data[0].WeatherText))
    .then(() => console.log(weatherText))
}






