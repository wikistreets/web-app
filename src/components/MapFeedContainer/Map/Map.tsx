"use client";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import Loading from "./loading";
import WSMarker from "@/components/MapFeedContainer/WSMarker/WSMarker";

export const Map: React.FC = async () => {
  // useEffect(() => {
  //   const el = document.getElementsByClassName("mapInFeed")[0];
  //   const topPos = el.getBoundingClientRect().top;
  //   console.log("topPos", topPos);
  //   // window.scrollTo(0, topPos);
  // });

  // get some mock data
  async function getData() {
    const res = await fetch(
      "http://localhost:3000/media/mock-feature-collections/feature-collection-1.json"
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData();
  const features = data.features;
  // features.map(marker => {
  //   console.log(
  //     `marker (${marker.geometry.type}) coordinates: ${marker.geometry.coordinates}`
  //   );
  // });

  const mapOptions = {
    center: data.features.length
      ? data.features[0].properties.center.filter(() => true).reverse() // clone, then reverse to get lat, lng
      : [51.505, -0.09],
    zoom: data.features.length ? data.features[0].properties.zoom : 4,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
  };
  // console.log(`mapOptions: ${JSON.stringify(mapOptions, null, 2)}`);

  return (
    <>
      <MapContainer
        className="mapInFeed w-full h-60 sticky top-0 z-20
        sm:aspect-square sm:h-full"
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <GeoJSON key={data.publicId} data={data} /> */}

        {features.map(feature => (
          <WSMarker key={feature._id} feature={feature} />
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
