"use client";

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { useRouter } from "next/navigation";

const MapCard = ({ data }) => {
  // console.log(JSON.stringify(data, null, 2));
  const router = useRouter();

  const mapOptions = {
    center: data.features.length
      ? data.features[0].properties.center.filter(() => true).reverse() // clone, then reverse to get lat, lng
      : [51.505, -0.09],
    zoom: data.features.length ? data.features[0].properties.zoom - 2 : 13,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
    dragging: true,
  };
  // console.log(`mapOptions: ${JSON.stringify(mapOptions, null, 2)}`);

  const features = data.features;
  // console.log(JSON.stringify(features, null, 2));

  const navigateToMap = (mapId: string) => {
    // navigate to another page using nextjs's router
    router.push(`/map/${mapId}`);
  };

  // differentiate clicks from drags
  const mouseDownCoords = e => {
    window.checkForDrag = e.clientX;
  };
  const clickOrDrag = (e, mapId) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 5 &&
      mouseUp > window.checkForDrag - 5
    ) {
      // if clicked, navigate to the map detail page
      navigateToMap(mapId);
    }
  };

  return (
    <>
      <figure
        className="flex flex-col justify-center items-center w-full px-4 pt-4 rounded-lg bg-white
          max-w-sm 2xl:max-w-md"
        onMouseDown={e => mouseDownCoords(e)}
        onMouseUp={e => clickOrDrag(e, data.publicId)}
      >
        <MapContainer className="w-full h-48 text-center" {...mapOptions}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON key={data.publicId} data={data} />
        </MapContainer>
        <figcaption className="w-full py-4 text-center text-md">
          {data.title}
        </figcaption>
      </figure>
    </>
  );
};

export default MapCard;
