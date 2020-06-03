// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 30.270575, lng: -97.744214},
//     zoom: 8


//   });

//   getDirections();  
// }


//   function getDirections() {
//       var queryURL ="https://maps.googleapis.com/maps/api/directions/json?origin=10098+Red+Sage+Dr&destination=Garden+of+the+gods&mode=transit&key=AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk";
//       $.ajax({
//         url: queryURL,
//         method: "GET",
//         datatype: "JSONP"
//       }).then(function(response) {
//         console.log(response);
//       });
//     };





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