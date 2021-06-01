var searchFlight = document.querySelector("#search-flight");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dateSelector");
var results = document.querySelector("#results");
var airlineName = document.querySelector("#airlineName");
var ticketDate = document.querySelector("#ticketDate");
var price = document.querySelector("#price");
var passengerName = document.querySelector("#passengerName");


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

var ticketGen = function() {

    airlineName.innerHTML = generatedAirline.value;

    ticketDate.innerHTML = departDate.value;

    price.innerHTML = "$" + Math.round(Math.random() * 10000)/100


    results.classList.remove("hide");
}
*/




















searchFlight.addEventListener("click", getMarsPics);