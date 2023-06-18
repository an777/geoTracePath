/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {

/*
  const flightPlanCoordinates = [
    {lat: 36.735, lng: -119.83 },
	{lat: 33.91, lng: -118.34 },
	{lat: 50.95, lng: 6.89 },
	{lat: 51.50, lng: -0.12 },
	{lat: 40.71, lng: -74.00 },
	{lat: 33.56, lng: -101.87 },

  ];


  const center = new google.maps.LatLngBounds();

  for (i = 0; i < flightPlanCoordinates.length; i++) {
  	center.extend(new google.maps.LatLng(flightPlanCoordinates[i]))
  }
*/

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {lat: 51.50, lng: -0.12},//center.getCenter(),
    mapTypeId: "roadmap",
  });




function DrawMarkers(position, i) {
    const marker = new google.maps.Marker({
          position: position,
          title: i.toString(),
          label: i.toString(),
          optimized: true,
        })

	marker.setMap(map)
}

function drawLopyline(flightPlanCoordinates)
{
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#" + randomColor,
    strokeOpacity: 1.0,
    strokeWeight: 5,
  });

  flightPath.setMap(map);
}

function loopArrayIN(traceRT, index, arr) {
    drawLopyline(traceRT)
    traceRT.forEach(DrawMarkers)
}

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 }
for (const [key, value] of Object.entries(jsonIN)) {
  loopArrayIN(value)
}


//  jsonIN.forEach(loopArrayIN())
    // Create the markers.
//  flightPlanCoordinates.forEach(DrawMarkers)


}


window.initMap = initMap;
