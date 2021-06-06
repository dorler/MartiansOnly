var SpaceXbtn = document.querySelector("#SpaceXbtn");
var NASAbtn = document.querySelector("#NASAbtn");
var bookSpaceX = document.querySelector("#bookSpaceX");
var bookNASA = document.querySelector("#bookNASA");
var SpaceX = document.querySelector("#SpaceX");
var NASA = document.querySelector("#NASA");
var timeSpaceX = document.querySelector("#timeSpaceX");
var timeNASA = document.querySelector("#timeNASA");
var bookFlight = document.querySelector("#book-flight");
var passengerInput = document.querySelector("#passenger-input");
var ticketResult = document.querySelector("#ticket-result");
var departFrom = document.querySelector("#departure-option");
var destination = document.querySelector("#destination");
var departDate = document.querySelector("#dateSelector");
var priceSpaceX = document.querySelector("#priceSpaceX");
var priceNASA = document.querySelector("#priceNASA");
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#DOB");
var from = localStorage.getItem("departFromLS");
var toward = localStorage.getItem("destinationLS");
var dateInput = localStorage.getItem("departDateLS");
var ticketDate = document.querySelector("#ticket-date");
var ticketFrom = document.querySelector("#ticket-from");
var ticketToward = document.querySelector("#ticket-toward");
var ticketLast = document.querySelector("#ticket-last-name");
var ticketFirst = document.querySelector("#ticket-first-name");


console.log(from, toward, dateInput);


function priceGen() {
    var priceOne = Math.floor(Math.random() * 100000 + 100000)

    priceSpaceX.innerHTML = "$" + priceOne

    var priceTwo = Math.floor(Math.random() * 100000 + 100000)

    priceNASA.innerHTML = "$" + priceTwo
    
};

function choseSpaceX() {
    ticketAirline.innerHTML = SpaceX.innerHTML
    ticketPrice.innerHTML = priceSpaceX.innerHTML
    ticketTime.innerHTML = timeSpaceX.innerHTML
};

function choseNASA() {
    ticketAirline.innerHTML = NASA.innerHTML
    ticketPrice.innerHTML = priceNASA.innerHTML
    ticketTime.innerHTML = timeNASA.innerHTML
};


function ticketGen() {
    passengerInput.classList.add("hide");

    var ticketAirline = document.querySelector("#ticket-airline");
    var ticketTime = document.querySelector("#ticket-time");
    var ticketPrice = document.querySelector("#ticket-price");
    ticketDate = dateInput.innerHTML;
    ticketFrom = from.innerHTML;
    ticketToward = toward.innerHTML;
    var ticketLast = lastNameInput;
    var ticketFirst = firstNameInput;

    /*
    if(bookSpaceX === document.activeElement) {
        ticketAirline.innerHTML = SpaceX.innerHTML
        ticketPrice.innerHTML = priceSpaceX.innerHTML
        ticketTime.innerHTML = timeSpaceX.innerHTML
    } else if(bookNASA === document.activeElement) {
        ticketAirline.innerHTML = NASA.innerHTML
        ticketPrice.innerHTML = priceNASA.innerHTML
        ticketTime.innerHTML = timeNASA.innerHTML
    } else {
        alert("Please select which which flight you'd like to book!")
    }









    ticketResult.classList.remove("hide");
};

    */























priceGen();
bookFlight.addEventListener("click", ticketGen);
SpaceXbtn.addEventListener("click", choseSpaceX);
NASAbtn.addEventListener("click", choseNASA);