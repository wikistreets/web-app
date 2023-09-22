"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

type Props = {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  size?: string;
  style?: string;
};

const Thumbnail: React.FC<Props> = ({
  centerX,
  centerY,
  markerX,
  markerY,
  size,
  style,
}) => {
  const ThumbnailClasses = `${size} ${style || ""}`;

  const [userId, setUserId] = useState("111");
  const mapContainerId = uuidv4();
  const mapId: string = "111"; // publicId

  return (
    <>
      <figure
        className="justify-center items-center h-full aspect-square
          max-w-xs 2xl:max-w-md"
      >
        <Link href={`/map/${mapId}`} passHref className="w-full">
          <MapContainer
            id={mapContainerId}
            className={ThumbnailClasses}
            center={[centerX, centerY]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
            attributionControl={false}
            dragging={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[markerX, markerY]}></Marker>
          </MapContainer>
        </Link>
      </figure>
    </>
  );
};

export default Thumbnail;
