let cityName = document.getElementById("cityName");
const apiKey = "fXhAVKDfHo3e7GCF4AueEwhuFNF9X6cq"; 
let q;
const letters = /^[A-Za-z]+$/;


addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        if(cityName.value.match(letters)){
            // console.log("Yes");
            q = cityName.value;
            // console.log(q);
            

        } else {
            console.log("Wrong");
        }
    }
})

function searchWeather(q){
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?${apikey}=apiKey&${q}=q`)
}


// Ask user for city name
// const getCity = () => {

// }

// const apiKey = fXhAVKDfHo3e7GCF4AueEwhuFNF9X6cq;

// fetch("http://dataservice.accuweather.com/locations/v1/cities/search")


