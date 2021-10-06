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
            weatherConditionKey(q);
            // backgroundKey(q);
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

// Pulls & update temperature into DOM
function getTemperature(locationKey){
    let temp;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => temp = (data[0].Temperature.Metric.Value.toFixed(0) + "°" + data[0].Temperature.Metric.Unit))
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
    .then(weatherText => document.getElementById("condition").innerHTML = weatherText)
}

// Pull location key for weather icon function
function weatherConditionKey(q){
    let locationKey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    .then(data => { return locationKey = data[0].Key})
    .then(locationKey => updateWeatherIcon(locationKey))      
}

// Update weather condition icon in DOM
function updateWeatherIcon(locationKey){
    let icon;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => icon = (data[0].WeatherIcon))
    // .then(icon => document.getElementById("condition").innerHTML = icon)
    .then(icon => selectWeatherIcon(icon))
}

// Pull location key for Background update
function backgroundKey(q){
    let locationKey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    .then(data => { return locationKey = data[0].Key})
    .then(locationKey => setBackgroundImage(locationKey))            
}

function setBackgroundImage(){
    let dayOrNight;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => dayOrNight = (data[0].IsDayTime))
    .then(dayOrNight => console.log(dayOrNight))
    // document.body.style.backgroundImage = "url('img_tree.png')";
}

function selectWeatherIcon(icon){
    switch (icon) {
        case 1:
            document.getElementById("weatherIcon").src = "../images/1.png";
            break;
    
        case 2:
            document.getElementById("weatherIcon").src = "../images/2.png";
            break;
    
        case 3:
            document.getElementById("weatherIcon").src = "../images/3.png";
            break;
    
        case 4:
            document.getElementById("weatherIcon").src = "../images/4.png";
            break;
    
        case 5:
            document.getElementById("weatherIcon").src = "../images/5.png";
            break;
    
        case 6:
            document.getElementById("weatherIcon").src = "../images/6.png";
            break;
    
        case 7:
            document.getElementById("weatherIcon").src = "../images/7.png";
            break;
    
        case 8:
            document.getElementById("weatherIcon").src = "../images/8.png";
            break;
    
        case 9:
            document.getElementById("weatherIcon").src = "../images/9.png";
            break;
    
        case 10:
            document.getElementById("weatherIcon").src = "../images/10.png";
            break;
    
        case 11:
            document.getElementById("weatherIcon").src = "../images/11.png";
            break;
    
        case 12:
            document.getElementById("weatherIcon").src = "../images/12.png";
            break;
    
        case 13:
            document.getElementById("weatherIcon").src = "../images/13.png";
            break;
    
        case 14:
            document.getElementById("weatherIcon").src = "../images/14.png";
            break;
    
        case 15:
            document.getElementById("weatherIcon").src = "../images/15.png";
            break;
    
        case 16:
            document.getElementById("weatherIcon").src = "../images/16.png";
            break;
    
        case 17:
            document.getElementById("weatherIcon").src = "../images/17.png";
            break;
    
        case 18:
            document.getElementById("weatherIcon").src = "../images/18.png";
            break;
    
        case 19:
            document.getElementById("weatherIcon").src = "../images/19.png";
            break;
    
        case 20:
            document.getElementById("weatherIcon").src = "../images/20.png";
            break;
    
        case 21:
            document.getElementById("weatherIcon").src = "../images/21.png";
            break;
    
        case 22:
            document.getElementById("weatherIcon").src = "../images/22.png";
            break;
    
        case 23:
            document.getElementById("weatherIcon").src = "../images/23.png";
            break;
    
        case 24:
            document.getElementById("weatherIcon").src = "../images/24.png";
            break;
    
        case 25:
            document.getElementById("weatherIcon").src = "../images/25.png";
            break;
    
        case 26:
            document.getElementById("weatherIcon").src = "../images/26.png";
            break;
    
        case 27:
            document.getElementById("weatherIcon").src = "../images/27.png";
            break;
    
        case 28:
            document.getElementById("weatherIcon").src = "../images/28.png";
            break;
    
        case 29:
            document.getElementById("weatherIcon").src = "../images/29.png";
            break;
    
        case 30:
            document.getElementById("weatherIcon").src = "../images/30.png";
            break;
    
        case 31:
            document.getElementById("weatherIcon").src = "../images/31.png";
            break;
    
        case 32:
            document.getElementById("weatherIcon").src = "../images/32.png";
            break;
    
        case 33:
            document.getElementById("weatherIcon").src = "../images/33.png";
            break;
    
        case 34:
            document.getElementById("weatherIcon").src = "../images/34.png";
            break;
    
        case 35:
            document.getElementById("weatherIcon").src = "../images/35.png";
            break;
    
        case 36:
            document.getElementById("weatherIcon").src = "../images/36.png";
            break;
    
        case 37:
            document.getElementById("weatherIcon").src = "../images/37.png";
            break;
    
        case 38:
            document.getElementById("weatherIcon").src = "../images/38.png";
            break;
    
        case 39:
            document.getElementById("weatherIcon").src = "../images/39.png";
            break;
    
        case 40:
            document.getElementById("weatherIcon").src = "../images/40.png";
            break;
    
        case 41:
            document.getElementById("weatherIcon").src = "../images/41.png";
            break;
    
        case 42:
            document.getElementById("weatherIcon").src = "../images/42.png";
            break;
    
        case 43:
            document.getElementById("weatherIcon").src = "../images/43.png";
            break;
    
        case 44:
            document.getElementById("weatherIcon").src = "../images/44.png";
            break;
    
        default:
            console.log("not available");
            break;
    }
}