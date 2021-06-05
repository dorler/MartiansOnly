var bookFlight = document.querySelector("#book-flight");
var passengerInput = document.querySelector("#passenger-input");
var ticketResult = document.querySelector("#ticket-result");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dateSelector");
var priceSpaceX = document.querySelector("#priceSpaceX");
var priceNASA = document.querySelector("#priceNASA");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#DOB");
var from = localStorage.getItem("departFromLS");
var toward = localStorage.getItem("destinationLS");
var date = localStorage.getItem("departDateLS");


console.log(from, toward, date);
console.log(from.value, toward.value, date.value);

function priceGen() {
    var priceOne = Math.floor(Math.random() * 100000 + 100000)

    priceSpaceX.innerHTML = "$" + priceOne

    var priceTwo = Math.floor(Math.random() * 100000 + 100000)

    priceNASA.innerHTML = "$" + priceTwo
    
}

function ticketGen() {
    passengerInput.classList.add("hide");
    ticketResult.classList.remove("hide");



};

























priceGen();
bookFlight.addEventListener("click", ticketGen);