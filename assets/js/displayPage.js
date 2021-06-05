var searchFlight = document.querySelector("#search-flight");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dateSelector");
var priceSpaceX = document.querySelector("#priceSpaceX");
var priceNASA = document.querySelector("#priceNASA");


function priceGen() {
    var priceOne = Math.floor(Math.random() * 100000 + 100000)

    priceSpaceX.innerHTML = "$" + priceOne

    var priceTwo = Math.floor(Math.random() * 100000 + 100000)

    priceNASA.innerHTML = "$" + priceTwo
    
}

function getMarsInfo() {





};

























priceGen();
searchFlight.addEventListener("click", getMarsInfo());