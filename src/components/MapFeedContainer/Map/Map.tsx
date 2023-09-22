"use client";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Loading from "./loading";

export const Map: React.FC = async () => {
  // useEffect(() => {
  //   const el = document.getElementsByClassName("mapInFeed")[0];
  //   const topPos = el.getBoundingClientRect().top;
  //   console.log("topPos", topPos);
  //   // window.scrollTo(0, topPos);
  // });

  async function getData() {
    const res = await fetch(
      "https://my.api.mockaroo.com/features.json?key=d9ddfc40&num=100"
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData();

  const mapOptions = {
    center: [51.505, -0.09],
    zoom: 3,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
  };

  return (
    <>
      <MapContainer
        className="mapInFeed w-full h-60 sticky top-0 z-20
        sm:aspect-square sm:h-full"
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map(marker => (
          <Marker key={marker._id} position={marker.geometry.coordinates}>
            <Popup>
              {marker.properties.title}
              <hr />
              {marker.properties.body}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
