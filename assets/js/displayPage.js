var searchFlight = document.querySelector("#search-flight");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dateSelector");


var getMarsPics = function() {

    var picsApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + destination.value + "/photos?sol=10&api_key=gx8qpDn3blyfVIl6JTpYJUW5ddk4mpO1cUgBqvKO";

    fetch(picsApi).then(function(response) {

        if(response.ok) {
            response.json().then(function(data) {
                console.log(response);
                console.log(data);
            })
        } /* else {
            alert("Error: " + response.statusText)
        }; */
    });

};

/*
function getMarsWeather() {

    var weatherApi = "https://api.nasa.gov/insight_weather/?api_key=gx8qpDn3blyfVIl6JTpYJUW5ddk4mpO1cUgBqvKO&feedtype=json&ver=1.0";

    fetch(weatherApi).then(function(response) {

        if(response.ok) {
            response.json().then(function(data) {
                console.log(response);
                console.log(data);
            })
        } else {
            alert("Error: " + response.statusText)
        };
    });

};
*/























searchFlight.addEventListener("click", getMarsPics);