// Globals

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