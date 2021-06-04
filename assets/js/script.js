
var searchBtn = document.querySelector("#search-flight");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#departure-date");



searchBtn.addEventListener("click", saveFlight);

function saveFlight(event) {

    event.preventDefault();

    console.log(departFrom, destination, departDate);

    localStorage.setItem("departFromLS", departFrom.value);

    localStorage.setItem("destinationLS", destination.value);

    localStorage.setItem("departDateLS", departDate.value);

    console.log(departFrom.value, destination.value, departDate.value);

    //location = "./result.html";

}