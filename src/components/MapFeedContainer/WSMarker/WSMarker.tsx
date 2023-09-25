"use client";

import { Marker, Polyline, Polygon, GeoJSON } from "react-leaflet";

const WSMarker = ({ feature }) => {
  // console.log(`feature.geometry.type: ${feature.geometry.type}`);

  const geoJSONToLeafletCoords = coords => {
    // convert array of GeoJSON coordinates to array of Leaflet coordinates, including two-dimensional arrays
    if (Array.isArray(coords) && typeof coords[0] === "number") {
      // base case - coords is an array containing numbers, so simply reverse them
      // console.log(`base case: ${coords}`);
      return coords.reverse();
    }
    // recursive case - coords is an array of arrays, so recurse
    // console.log(`recursive case: ${coords}`);
    return coords.map(coord => geoJSONToLeafletCoords(coord));
  };

  const handleClick = e => {
    console.log(`Clicked a marker!`);
  };

  // return the appropriate kind of map element
  switch (feature.geometry.type) {
    case "LineString":
      // convert GeoJSON lng,lat coordinates to Leaflet lat,lng coordinates
      if (!feature.geometry.latLngCoordinates)
        feature.geometry.latLngCoordinates = geoJSONToLeafletCoords(
          feature.geometry.coordinates
        );
      return (
        <Polyline
          key={feature.properties._id}
          positions={feature.geometry.latLngCoordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    case "Polygon":
      // convert GeoJSON lng,lat coordinates to Leaflet lat,lng coordinates
      if (!feature.geometry.latLngCoordinates)
        feature.geometry.latLngCoordinates = geoJSONToLeafletCoords(
          feature.geometry.coordinates
        );
      return (
        <Polygon
          key={feature.properties._id}
          positions={feature.geometry.latLngCoordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    case "Point":
      // convert GeoJSON lng,lat coordinates to Leaflet lat,lng coordinates
      if (!feature.geometry.latLngCoordinates)
        feature.geometry.latLngCoordinates = geoJSONToLeafletCoords(
          feature.geometry.coordinates
        );
      return (
        <Marker
          key={feature.properties._id}
          position={feature.geometry.latLngCoordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    default:
      // some other GeoJSON object
      // uses the GeoJson lng,lat coordinates in the original data
      return (
        <GeoJSON
          key={feature.properties._id}
          data={feature}
          eventHandlers={{ click: handleClick }}
        />
      );
  }
};

export default WSMarker;
