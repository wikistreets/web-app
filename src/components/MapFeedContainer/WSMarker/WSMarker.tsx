"use client";

import { Marker, Polyline, Polygon, GeoJSON } from "react-leaflet";

const WSMarker = ({ feature }) => {
  //   console.log(`feature.geometry.type: ${feature.geometry.type}`);

  const handleClick = e => {
    console.log(`Clicked a marker!`);
  };

  // return the appropriate kind of map element
  switch (feature.geometry.type) {
    case "LineString":
      // need to reverse all damn long/lat coords
      feature.geometry.coordinates.forEach(coord => {
        coord.reverse();
      });
      return (
        <Polyline
          key={feature.properties._id}
          positions={feature.geometry.coordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    case "Polygon":
      // need to reverse all damn long/lat coords
      feature.geometry.coordinates.forEach(coord => {
        coord.reverse();
      });
      return (
        <Polygon
          key={feature.properties._id}
          positions={feature.geometry.coordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    case "Point":
      // need to reverse all damn long/lat coords
      feature.geometry.coordinates.reverse();
      return (
        <Marker
          key={feature.properties._id}
          position={feature.geometry.coordinates}
          eventHandlers={{ click: handleClick }}
        />
      );
      break;
    default:
      // generic GeoJSON object
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
