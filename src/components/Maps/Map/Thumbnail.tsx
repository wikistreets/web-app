"use client";

import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { Data } from "@/types/data";

const Thumbnail = ({ data, size, style }: Data) => {
  const ThumbnailClasses = `${size} ${style || ""}`;

  const mapOptions = {
    center: data.features.length
      ? data.features[0].properties.center.filter(() => true).reverse() // clone, then reverse to get lat, lng
      : [51.505, -0.09],
    zoom: data.features.length ? data.features[0].properties.zoom - 1 : 13,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
    dragging: true,
  };

  const [userId, setUserId] = useState("111");
  const mapContainerId = uuidv4();
  const mapId: string = "111"; // publicId

  return (
    <>
      <figure
        className="z-0 justify-center items-center h-full 
              aspect-square max-w-xs sm:w-full 2xl:max-w-md
              sm:pl-8"
      >
        <Link href={`/map/${mapId}`} passHref className="w-full">
          <MapContainer
            id={mapContainerId}
            className={ThumbnailClasses}
            {...mapOptions}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON key={data.publicId} data={data} />
          </MapContainer>
        </Link>
      </figure>
    </>
  );
};

export default Thumbnail;
