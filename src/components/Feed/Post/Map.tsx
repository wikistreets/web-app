"use client";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

type Props = {};

const MapInPost = (props: Props) => {
  return (
    <>
      <MapContainer
        className="w-full h-60 sticky top-0 z-20
        sm:h-full"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapInPost;
