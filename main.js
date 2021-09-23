let cityName = document.getElementById("cityName");
const apiKey = "fXhAVKDfHo3e7GCF4AueEwhuFNF9X6cq"; 
let q;
const letters = /^[A-Za-z]+$/; //Might need to allow users to enter space


addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        if(cityName.value.match(letters)){
            q = cityName.value;
            searchWeather(q);
        } else {
            console.log("Wrong");
        }
    }
});

function searchWeather(q){
    let locationKey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => { return locationKey = data[0].Key})
    .then(locationKey => getTemperature(locationKey))   
    .then(locationKey => console.log(locationKey))    

    // .then(console.log(loc))
    
    // .then(data => {
    //     let output = "<h3>Posts</h3>";
    //     data[0].forEach(function(post){
    //         output += ` 
    //             <div>
    //                 <p>${post.Key}</p>
    //             </div>
    //         `;
    //     });
    //     document.getElementById("temp").innerHTML = output;
    // });
}

// 243939

function getTemperature(locationKey){
    let temp;
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => temp = (data[0].Temperature.Metric.Value + "°" + data[0].Temperature.Metric.Unit))
    .then(() => console.log(temp))
}


// Fix this function
function getWeatherText(l){
    // console.log(l)
    // let condition;
    // fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`)
    // .then(response => response.json())
    // .then(data => console.log(data))
}




// Windhoek


