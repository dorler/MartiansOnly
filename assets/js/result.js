// Globals

let apiUrl = "https://images-api.nasa.gov/"




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