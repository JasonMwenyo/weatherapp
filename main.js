let cityName = document.getElementById("cityName");
const apiKey = "fXhAVKDfHo3e7GCF4AueEwhuFNF9X6cq"; 
let q;
const letters = /^[A-Za-z]+$/; //Might need to allow users to enter space


addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        if(cityName.value.match(letters)){
            // console.log("Yes");
            q = cityName.value;
            // console.log(q);
            
            searchWeather(q);

        } else {
            console.log("Wrong");
        }
    }
});

function searchWeather(q){
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`) 
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => {
        let output = "<h3>Posts</h3>";
        data.forEach(function(post){
            output += ` 
                <div>
                    <p>${post.Key}</p>
                </div>
            `;
        });
        document.getElementById("temp").innerHTML = output;
    })
}





