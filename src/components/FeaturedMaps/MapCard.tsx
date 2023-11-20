"use client";

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { useRouter } from "next/navigation";
import { Data } from "@/types/data";
import { LatLng } from "leaflet";

const MapCard = ({ data }: Data) => {
  console.log(JSON.stringify(data, null, 2));
  const router = useRouter();

  const mapOptions = {
    center: data.features.length
      ? data.features[0].properties.center.filter(() => true).reverse() // clone, then reverse to get lat, lng
      : new LatLng(51.505, -0.09),
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
  const mouseDownCoords = (e: React.MouseEvent<HTMLElement>) => {
    (window as any).mouseDownX = e.clientX;
    (window as any).mouseDownY = e.clientY;
  };

  const clickOrDrag = (e: React.MouseEvent<HTMLElement>, mapId: string) => {
    const mouseUpX = e.clientX;
    const mouseUpY = e.clientY;
    const dx =
      (window as any).mouseDownX !== undefined
        ? Math.abs((window as any).mouseDownX - mouseUpX)
        : 0;
    const dy =
      (window as any).mouseDownY !== undefined
        ? Math.abs((window as any).mouseDownY - mouseUpY)
        : 0;
    const isDragX = dx >= 5;
    const isDragY = dy >= 5;
    // console.log(`${dx} ${dy} ${isDragX} ${isDragY}`);
    // if clicked, not dragged, navigate to the map detail page
    if (!isDragX && !isDragY) navigateToMap(mapId);
  };

  return (
    <>
      <figure
        className="flex flex-col justify-center items-center w-full px-4 pt-4 rounded-lg bg-white
          max-w-sm 2xl:max-w-md"
        onMouseDown={(e) => mouseDownCoords(e)}
        onMouseUp={(e) => clickOrDrag(e, data.publicId)}
      >
        <MapContainer className="z-0 w-full h-48 text-center" {...mapOptions}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON key={data.publicId} data={data} />
        </MapContainer>
        <figcaption className="w-full py-4 text-center text-sm">
          {data.title}
        </figcaption>
      </figure>
    </>
  );
};

export default MapCard;
