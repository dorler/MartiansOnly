
var searchBtn = document.querySelector("#search-flight");
var departFrom = document.querySelector("#depart");
var destination = document.querySelector("#arrival");
var departDate = document.querySelector("#departure-date");



searchBtn.addEventListener("click", saveFlight);

function saveFlight(event) {

    event.preventDefault();

    console.log(departFrom, destination, departDate);

    localStorage.setItem("departFromLS", departFrom.value);

    localStorage.setItem("destinationLS", destination.value);

    localStorage.setItem("departDateLS", departDate.value);

    console.log(departFrom.value, destination.value, departDate.value);

    location = "./bookFlight.html";

}