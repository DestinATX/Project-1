var map, infoWindow;
var originLat, originLong;

var geo = confirm("Do you want to use geolocation?");
var askOrigin = "10098+Red+Sage+Dr,+Colorado+Springs,+CO+80920";

var askDestiation = "Garden+of+the+gods"
var askMode = "";
var foodtrucks;

var weatherIcon = document.getElementById("weatherIcon");
var tempertaure = document.getElementById("temperature");
var humidity = document.getElementById("humidity");





// Google Maps javascript
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.270575, lng: -97.744214},
    zoom: 12
  });

  

  // Weather API
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=3a62bced9ceab4de3f9f5c1c6e205817"
  }).then(function(response4) {
    console.log(response4);

    weatherIcon = response4.weather[0].icon;
    $("#weatherIcon").attr("src", "http://openweathermap.org/img/w/" + weatherIcon + ".png" );
    tempertaure.innerText = "Temperature: " + Math.floor(((response4.main.temp - 273.15)*9 /5)+32)+ "°F";
    humidity.innerText = "Humidity: " + response4.main.humidity + "%";


  });


  // YELP API
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=foodtrucks&location=austin&limit=50",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization:
        "Bearer LWQKKIC6WZLlwyI7-Pg9pE02R0wCWEQtyFS7Y3hPAu-PEbUHgvd9P9munA-Ozw5qz4XsU-RlmxcW9o8bzippVqsR-MUSpI5ZOeEs4J25asF8SJYQZZNbZFefcZPSXnYx",
      // Cookie:
      //   "hl=en_US; wdi=1|53E4B0D737ADFACD|0x1.7b4a3c92c2739p+30|e19930740c790522"
    },
  }).then(function (getYelpApi) {
    console.log(getYelpApi);



    for (let i = 0; i < getYelpApi.businesses.length; i++) {
      console.log(getYelpApi.businesses[i].coordinates);

      var LatLng = {
        lat: getYelpApi.businesses[i].coordinates.latitude,
        lng: getYelpApi.businesses[i].coordinates.longitude
      }
      var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: getYelpApi.businesses[i].name
        });
        marker.addListener('click', function() {
          map.setZoom(19);
          map.setCenter(this.getPosition());
        });

    }
  });



// HTML5 Geo-location
  if (geo === true) {
  infoWindow = new google.maps.InfoWindow;

        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            originLat = pos.lat;
            originLong = pos.lng;
            console.log(originLat);
            console.log(originLong);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Current Location.');
            infoWindow.open(map);
            map.setCenter(pos);
            // geo-coding
            var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng="+ originLat +","+originLong+"&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk"
            $.ajax({
                url: queryURL,
                method: "POST",
                dataType: "json",
                header: {
                'Access-Control-Allow-Origin':'*'
                    }
    
              }).then(function(response){
                   console.log(response.results[0].formatted_address);
                   origin = response.results[0].formatted_address;
                  //  Directions API with Geo-location
                   var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin="+ origin +"&destination=Garden+of+the+gods&mode=driving&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
                   $.ajax({
                     
                 url: queryURL,
                 method: "GET",
                 dataType: "json",
                 header: {
                     'Access-Control-Allow-Origin':'*'
                 }
               }).then(function(response2) {
                 console.log(response2);
               });  

          
    
        });

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
          

        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      } else {
        origin = askOrigin;

        // directions without geo-location
        var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?location="+ origin +"&destination=Garden+of+the+gods&mode=driving&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
          $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        header: {
            'Access-Control-Allow-Origin':'*'
        }
      }).then(function(response3) {
        console.log(response3);
      });
        
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

}

