// Function to call materialize
$(document).ready(function () {
  // Calling Sidenav
  $('.sidenav').sidenav();
  // Calling modals
  $('.modal').modal();
  $('.materialboxed').materialbox();
  // Calling parallax of Austin
  $('.parallax').parallax();
  // $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true,
    yearRange: 1
  });
  // $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();

  // jQuery initialization of dropdown in footer
  // $('.chips').chips();
  $('.dropdown-trigger').dropdown();
  $('.carousel').carousel({
    padding: 200
  });

  // auto-fill when users type food type
  $('input#input_text, textarea#textarea2').characterCounter();
  $('input.autocomplete').autocomplete({
    data: {
      "korean": null,
      "foodtrucks": null,
      "bbq": null,
      "taiwanese": null,
      "foodstands": null,
      "hotdog": null,
      "tacos": null,
      "brazilian": null,
      "latin": null,
      "coffee": null,
      "bars": null,
      "sandwiches": null,
      "newamerican": null,
      "mediterranean": null,
      "cheese": null,
      "mexican": null,
      "cajun": null,
      "vietnamese": null,
      "seafood": null,
      "gluten_free": null,
      "pizza": null,
      "italian": null,
      "breakfast_brunch": null,
      "indpak": null,
      "gourmet": null,
      "cuban": null,
      "vegan": null,
      "vegetarian": null,
      "wraps": null,
      "sushi": null,
      "halal": null,
      "mideastern": null,
      "thai": null,
      "comforfood": null,
      "burgers": null,
      "beerbar": null,
      "asianfusion": null,
      "cheesesteaks": null,
      "beergardens": null,
      "chinese": null,
    },
  });
  // calls developer carousel
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2500);
  }
});


// Creating instances
var map, infoWindow, originLat, originLong, destination, start, end;
// Default travel mode
var askMode="DRIVING";

// Creating variables for weather info
var weatherIcon = document.getElementById("weatherIcon");
var tempertaure = document.getElementById("temperature");
var humidity = document.getElementById("humidity");

// footer variable
var footer = document.getElementById("footer");
// navbar variable
var navbar = document.getElementById("navbar");
// results variable
var results = document.getElementById("results");
// map div
var mapDiv = document.getElementById("map");

// array for markers
var markerArray = [];

// button to change travel mode to driving
$("#driving").click(function() {
  askMode = "DRIVING";
  console.log(askMode);
});
// button to change travel mode to bicycling
$("#bicycle").click(function() {
  askMode = "BICYCLING";
  console.log(askMode);
});

// button to change travel mode to walking
$("#walking").click(function() {
  askMode = "WALKING";
  console.log(askMode);
});

// button to change travel mode to public transit
$("#transit").click(function() {
  askMode = "TRANSIT";
  console.log(askMode);
});

// scroll down to footer
$("#about").click(function () {
  footer.scrollIntoView();
});

// scroll back up
$("#home").click(function () {
  navbar.scrollIntoView();
});

// Google Maps javascript
function initMap() {

  // direction render variable
var directionsRenderer = new google.maps.DirectionsRenderer;
  // route calculator
var directionsService = new google.maps.DirectionsService;

  // map render
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.270575, lng: -97.744214 },
    zoom: 10,
  });

  // render direction on map
  directionsRenderer.setMap(map);
  // render directions on the panel
  directionsRenderer.setPanel(document.getElementById('directionPanel'));

  
  // popup marker for current location
  infoWindow = new google.maps.InfoWindow();

  // HTML5 geo-location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        originLat = pos.lat;
        originLong = pos.lng;
        console.log(originLat);
        console.log(originLong);
        infoWindow.setPosition(pos);
        infoWindow.setContent("Current Location.");
        infoWindow.open(map);
        map.setCenter(pos);

        // Weather API
        $.ajax({
          url:
            "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=3a62bced9ceab4de3f9f5c1c6e205817",
        }).then(function (response4) {
          console.log(response4);

          weatherIcon = response4.weather[0].icon;
          $("#weatherIcon").attr(
            "src",
            "http://openweathermap.org/img/w/" + weatherIcon + ".png"
          );
          tempertaure.innerText =
            "Temperature: " +
            Math.floor(((response4.main.temp - 273.15) * 9) / 5 + 32) +
            "°F";
          humidity.innerText = "Humidity: " + response4.main.humidity + "%";
        });

        // geo-coding to get address of current location
        var queryURL =
          "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          originLat +
          "," +
          originLong +
          "&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
        $.ajax({
          url: queryURL,
          method: "POST",
          dataType: "json",
          header: {
            "Access-Control-Allow-Origin": "*",
          },
        }).then(function (response) {
          console.log(response.results[0].formatted_address);
          // current address
          start = response.results[0].formatted_address;

          // search for food truck
          $("#submit").on("click", function () {
            // empyting array
            foodTruckArray = [];
            // removing markers
            removeMarkers();

            // search by price
            var price = $("#1").prop("checked") ? "1," : "";
            price += $("#2").prop("checked") ? "2," : "";
            price += $("#3").prop("checked") ? "3," : "";
            price += $("#4").prop("checked") ? "4," : "";
            var textbox = $("#foodType").val();
            price = price.substring(0, price.length - 1);
            

            
            // YELP API search
            $.ajax({
              url:
                "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=foodtrucks&location=austin&limit=50&price=" +
                price +
                "&categories=" +
                textbox,
              method: "GET",
              timeout: 0,
              headers: {
                Authorization:
                  "Bearer LWQKKIC6WZLlwyI7-Pg9pE02R0wCWEQtyFS7Y3hPAu-PEbUHgvd9P9munA-Ozw5qz4XsU-RlmxcW9o8bzippVqsR-MUSpI5ZOeEs4J25asF8SJYQZZNbZFefcZPSXnYx",
              },
            }).then(function (getYelpApi) {

              console.log(getYelpApi);

              $("#results").empty();
              for (let i = 0; i < getYelpApi.businesses.length; i++) {
                // address for food trucks
                end =
                  getYelpApi.businesses[i].location.display_address[0] +
                  " " +
                  getYelpApi.businesses[i].location.display_address[1];


                // numerized label
                var labels = String(i + 1);

                // creating cards with template literals
                var card = $(`<div class="row">
                <div class="row">
              <div class="col s12 m7">
                <div class="card horizontal medium">
                  <div class="card-image">
                    <img src="${getYelpApi.businesses[i].image_url}">
                    <span class="card-title">${getYelpApi.businesses[i].name}</span>
                  </div>
                  <div class="card-stacked">
                  <div class="card-content contentUp">
                  <h4>${labels}. ${getYelpApi.businesses[i].name}</h4>
                  <div>Address: ${end}</div>
                  <div>Phone Number: ${getYelpApi.businesses[i].display_phone}</div>
                  <div>Rating: ${getYelpApi.businesses[i].rating}</div>  

                  </div>
                  <div class="card-action">
                  <a id="getDirections${labels}" value="${labels}">Directions</a>
                  <a href="${getYelpApi.businesses[i].url}" target="_blank">More Info</a>
                  </div>
                </div>
              </div>
            </div> `);

               
                // storing foodtruck addresses by their number
                localStorage.setItem(labels,end);
                
                // append cards to results div
                $("#results").append(card);

                
                // get direction to the food truck
                $(`#getDirections${labels}`).click(function() {
                  mapDiv.scrollIntoView();
                  // using local storage data
                  var endPoint = (localStorage.getItem(this.getAttribute("value")));

              
                  // route calculation
                directionsService.route({
                      origin: start,
                      destination: endPoint,
                      travelMode: askMode
                    }, function(response5, status) {
                      if (status === 'OK') {
                        console.log (response5);
                        directionsRenderer.setDirections(response5);
                      } else {
                        window.alert('Directions request failed due to ' + status);
                      }
                    });
                   
                 
                  
                });

                // food truck coordinate
                var LatLng = {
                  lat: getYelpApi.businesses[i].coordinates.latitude,
                  lng: getYelpApi.businesses[i].coordinates.longitude,
                };

                // creating marker for food truck location
                var marker = new google.maps.Marker({
                  position: LatLng,
                  map: map,
                  title: getYelpApi.businesses[i].name,
                  label: labels,
                });
                // putting markers in array
                markerArray.push(marker);
                
                // zoom in function
                marker.addListener("click", function () {
                  map.setZoom(19);
                  map.setCenter(this.getPosition());

                  
                });
              }
            });
          });
        });
      },
      // error handler
      function () {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // If browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  // error handler
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    // show geo-location data on map
    infoWindow.open(map);
  }
  


}

// marker removing function
function removeMarkers(){
  for(i=0; i<markerArray.length; i++){
      markerArray[i].setMap(null);
  }
}
