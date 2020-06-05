var map, infoWindow;
var originLat, originLong;

var geo = confirm("Do you want to use geolocation?");


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.270575, lng: -97.744214},
    zoom: 12


  });

  if (geo == true) {
  infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
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


            var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ originLat +","+originLong+"&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";

    $.ajax({
      url: queryURL,
        method: "GET",
        dataType: "json",
        header: {
            'Access-Control-Allow-Origin':'*'
        }

    }).then(function(response){
          console.log(response.results[0].formatted_address);
          var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin="+ response.results[0].formatted_address+"&destination=Garden+of+the+gods&mode=driving&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
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

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.270575, lng: -97.744214},
          zoom: 12
      
      
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

// by using cors-anywhere, CO

  // function getDirections() {

  //   // if (geo === true) {
  //   //   console.log(originLat)

  //   var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ originLat +","+originLong+"&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";

  //   $.ajax({
  //     url: queryURL,
  //       method: "GET",
  //       dataType: "json",
  //       header: {
  //           'Access-Control-Allow-Origin':'*'
  //       }

  //   }).then(function(response){
  //         console.log(response);
  //         var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin="+ response+"&destination=Garden+of+the+gods&mode=driving&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
  //         $.ajax({
  //       url: queryURL,
  //       method: "GET",
  //       dataType: "json",
  //       header: {
  //           'Access-Control-Allow-Origin':'*'
  //       }
  //     }).then(function(response2) {
  //       console.log(response2);
  //     });
      
// 
    // });
  // } else {

  //   var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?location="+ origin +"&destination=Garden+of+the+gods&mode=driving&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
  //         $.ajax({
  //       url: queryURL,
  //       method: "GET",
  //       dataType: "json",
  //       header: {
  //           'Access-Control-Allow-Origin':'*'
  //       }
  //     }).then(function(response3) {
  //       console.log(response3);
  //     });


  // }

      

    // $.get("https://maps.googleapis.com/maps/api/directions/json?origin=10098+Red+Sage+Dr&destination=Garden+of+the+gods&mode=transit&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk").done(function (data) {
    // console.log(data);


    // };





// function initMap() {
  
    
//    var pointA = "4313+Captain+Jack+Ln"
//    var pointB = "10098+Red+Sage+Dr"

//     // initial= new google.maps.LatLng(30.2672, 97.7431);
//     myOptions = {
//       zoom: 7,
//       center: initial
//     },
//     map = new google.maps.Map(document.getElementById('map'), myOptions),
//     // Instantiate a directions service.
//     directionsService = new google.maps.DirectionsService,
//     directionsDisplay = new google.maps.DirectionsRenderer({
//       map: map
//     }),
//     markerA = new google.maps.Marker({
//       position: pointA,
//       title: "point A",
//       label: "A",
//       map: map
//     }),
//     markerB = new google.maps.Marker({
//       position: pointB,
//       title: "point B",
//       label: "B",
//       map: map
//     });

//   // get route from A to B
//   calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

// }



// function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
//   directionsService.route({
//     origin: pointA,
//     destination: pointB,
//     travelMode: google.maps.TravelMode.TRANSIT
//   }, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// }

// initMap();