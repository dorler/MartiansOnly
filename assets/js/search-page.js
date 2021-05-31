// John Mohlenkamp
// Member of Project Team 5: Core 4
// May/June 2021

// Globals

// NASA API key -- if we need it
const nasaAPI = "fhR8LebqBdyU2Hw48hdGz8oD0LG6VHZq0U0hx6tb"

const nasaImagesURL = "https://images-api.nasa.gov"

// From https://github.com/chrisccerami/mars-photo-api
const nasaRoverPhotos = "https://mars-photos.herokuapp.com/"  //This is the one that doesn't require an API key
let curiosityCameras = {"fhaz":"front hazard avoidance camera",
                        "rhaz":"rear hazard avoidance camera",
                        "mast":"mast camera",
                        "chemcam":"chemistry and camera complex",
                        "mahli":"mars hand lens imager",
                        "mardi":"mars descent imager",
                        "navcam":"navigation camera",
                        "pancam":"panoramic camera",
                        "minites":"miniture thermal emission spectrometer"}
                        
let prosperityCameras = { "EDL_RUCAM":"rover up-look camera",
                          "EDL_RDCAM":"rover down-look camera",
                          "EDL_DDCAM":"descent stage down-look camera",
                          "EDL_PUCAM!":"parachute up-look camera a",
                          "EDL_PUCAM2":"parachute up-look camera b",
                          "NAVCAM_LEFT":"navigation camera - left",
                          "NAVCAM_RIGHT":"navigation camera - right",
                          "MCZ_RIGHT":"mast camera zoom - right",
                          "MCZ_LEFT":"mast camera zoom - left",        
                          "FRONT_HAZCAM_LEFT_A":"front hazard avoidance camera - left",
                          "FRONT_HAZCAM_RIGHT_A":"front hazard avoidance camera - right",
                          "REAR_HAZCAM_LEFT":"rear hazard avoidance camera - left",
                          "REAR_HAZCAM_RIGHT":"rear hazard avoidance camera - right",
                          "SKYCAM":"MEDA Skycam",
                          "SHERLOC_WATSON":"Sherloc Watson Camera"
}


// Elements in main search area
const searchBtnElement = document.getElementById("search-btn");
const locationElement = document.getElementById("location")
const departureDateElement = document.getElementById("departure-date")

// Elements for card(s)
const card1TitleElement = document.getElementById("card-1-title")
const card1SubTitleElement = document.getElementById("card-1-subtitle")
const card1DateElement = document.getElementById("card-1-date")
const card1TextElement = document.getElementById("card-1-text")
const card1ImgElement = document.getElementById("card-1-img")
const card1IconElement = document.getElementById("card-1-icon")
const card1SelectElement = document.getElementById("card-1-select-btn")

//Elements for photos on search screen
const tripPhoto1Element = document.getElementById("trip-photo-1")
const roverSelectElement = document.getElementById("rover-select")
const roverCameraElement = document.getElementById("rover-camera")

//Elements for inputs
const selectOptions = document.getElementById("selectCamera")



// Functions

const storeData = function storeToLocal(){
    // This function will store any needed search data to the local storage

    

}
const popCards = function populateCards(){
    // This function will populate the search cards with flight info


}


const fFetch = function flightFetch(location){
    //Function to calculate flight times and distances


    //Call function populateCards with results
}

const pDataResults = function passDataResults(){
    // Function to pass the data results from the search page
    // to the results page

    // May call storeData function as well... 

}

function selectCuriosity(){
  //This will fill the select options for the camera choices on Curiosity
  // create option using DOM
console.log("Starting Curiosity fill")
//Clear any existing options
selectOptions.options.length = 0;

for(index in curiosityCameras) {
  selectOptions.options[selectOptions.options.length] = new Option(curiosityCameras[index], index);
  }
}

function selectProsperity(){
  //This will fill the select options for the camera choices on Curiosity
  // create option using DOM
console.log("Starting Prosperity fill")
//Clear any existing options
selectOptions.options.length = 0;

for(index in prosperityCameras) {
  selectOptions.options[selectOptions.options.length] = new Option(prosperityCameras[index], index);
  }
}





//This async function will get specific images off the NASA images api
const getImage = async function nasaImagesAPI() {
    try {
      let response = await fetch('image.jpg');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      //TODO: stuff in here
  
    } catch(e) {
      console.log(e);
    }
  }



// Event Listeners
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Search page loaded');
});

// create event listener on search button to call flightFetch
$("#search-btn").click(function() {
    location = $("#location").val();
    flightFetch(location);
  });

// create event listener on card select button to call passDataResults
$("#card-1-select-btn").click(function() {
    //Don'd know yet if we're passing data into
    pDataResults();
  });

$("#roverCuriosity").click(function() {
  // User chose Curiosity
  console.log("chose Curiosity")
  selectCuriosity()
})

$("#roverProsperity").click(function() {
  // User chose Prosperity
  console.log("chose Prosperity")
  selectProsperity()
})

$("#getRoverImages").click(function(){
  // Fetch images
  console.log("fetch images")
  fFetch
})
