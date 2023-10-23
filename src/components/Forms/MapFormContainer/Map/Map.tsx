"use client";

import { LatLng } from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import WSMarker from "@/components/MapFeedContainer/WSMarker/WSMarker";

export const Map = () => {
  // console.log("Map component loading...");
  const mapOptions = {
    center: new LatLng(51.505, -0.09), // TODO: default = user location?
    zoom: 4,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
  };
  // console.log(`mapOptions: ${JSON.stringify(mapOptions, null, 2)}`);

  return (
    <>
      <MapContainer
        className="mapInFeed w-full h-60 sticky top-0 z-20
        md:h-full"
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <GeoJSON key={data.publicId} data={data} /> */}
        {/* <WSMarker key={""} feature={""} />; */}
      </MapContainer>
    </>
  );
};

export default Map;
