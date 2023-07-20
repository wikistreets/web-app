"use client";

import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

interface MapCardProps {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  title: string;
}

const MapCard: React.FC<MapCardProps> = ({
  centerX,
  centerY,
  markerX,
  markerY,
  title,
}) => {
  const mapContainerId = uuidv4();

  return (
    <figure
      className="flex flex-col justify-center items-center w-full px-4 pt-4 rounded-lg bg-white
      max-w-sm 2xl:max-w-md"
    >
      <MapContainer
        id={mapContainerId}
        className="w-full h-48 text-center"
        center={[centerX, centerY]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[markerX, markerY]}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
      <figcaption className="w-full py-4 text-center text-md">
        {title}
      </figcaption>
    </figure>
  );
};

export default MapCard;
