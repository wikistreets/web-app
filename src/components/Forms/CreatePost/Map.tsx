"use client";

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { useRouter } from "next/navigation";
import { LatLng } from "leaflet";

export const Map = () => {
  // console.log(JSON.stringify(data, null, 2));
  const router = useRouter();

  const mapOptions = {
    center: new LatLng(51.505, -0.09),
    zoom: 13,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
    dragging: true,
  };
  // console.log(`mapOptions: ${JSON.stringify(mapOptions, null, 2)}`);

  // const features = data.features;
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
      <figure className="">
        <MapContainer className="w-full h-48 text-center" {...mapOptions}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <GeoJSON key={data.publicId} data={data} /> */}
        </MapContainer>
      </figure>
    </>
  );
};