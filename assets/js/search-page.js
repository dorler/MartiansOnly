// John Mohlenkamp
// Member of Project Team 5: Core 4
// May 2021

// Globals

// NASA API key -- if we need it
const nasaAPI = "fhR8LebqBdyU2Hw48hdGz8oD0LG6VHZq0U0hx6tb"

const nasaImagesURL = "https://images-api.nasa.gov"

// From https://github.com/chrisccerami/mars-photo-api
const nasaRoverPhotos = "https://mars-photos.herokuapp.com/"  //This is the one that doesn't require an API key
let curiosityCameras = {"front hazard avoidance camera":"fhaz",
                        "rear hazard avoidance camera":"rhaz",
                        "mast camera":"mast",
                        "chemistry and camera complex":"chemcam",
                        "mars hand lens imager":"mahli",
                        "mars descent imager":"mardi",
                        "navigation camera":"navcam",
                        "panoramic camera":"pancam",
                        "miniture thermal emission spectrometer":"minites"}
                        
let prosperityCameras = { "rover up-look camera":"EDL_RUCAM",
                          "rover down-look camera":"EDL_RDCAM",
                          "descent stage down-look camera":"EDL_DDCAM",
                          "parachute up-look camera a":"EDL_PUCAM1",
                          "parachute up-look camera b":"EDL_PUCAM2",
                          "navigation camera - left":"NAVCAM_LEFT",
                          "navigation camera - right":"NAVCAM_RIGHT",
                          "mast camera zoom - right":"MCZ_RIGHT",
                          "mast camera zoom - left":"MCZ_LEFT",
                          "front hazard avoidance camera - left":"FRONT_HAZCAM_LEFT_A",
                          "front hazard avoidance camera - right":"FRONT_HAZCAM_RIGHT_A",
                          "rear hazard avoidance camera - left":"REAR_HAZCAM_LEFT",
                          "rear hazard avoidance camera - right":"REAR_HAZCAM_RIGHT",
                          "MEDA Skycam":"SKYCAM",
                          "Sherloc Watson Camera":"SHERLOC_WATSON"
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
