var searchBtn = document.querySelector("#search-flight");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dates");



searchBtn.addEventListener("click", saveFlight);

function saveFlight(event) {

    event.preventDefault();

    console.log(departFrom, destination, departDate);

    localStorage.setItem("departFromLS", departFrom);

    localStorage.setItem("destinationLS", destination);

    localStorage.setItem("departDateLS", departDate);

    console.log(departFrom, destination, departDate);
}





















