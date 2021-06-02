// Globals
var departFromResult = localStorage.getItem("departFromLS");

var destinationResult = localStorage.getItem("destinationLS");

var departDateResult = localStorage.getItem("departDateLS");

console.log(departFromResult, destinationResult, departDateResult);

console.log(departFromResult.value, destinationResult.value, departDateResult.value);

console.log(typeof departFromResult, typeof destinationResult, typeof departDateResult);


let apiUrl = "https://images-api.nasa.gov/"



// Look at https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf 
// for the fetch api data.



function fetchImages(){
    
    //TODO: query params



    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });

}