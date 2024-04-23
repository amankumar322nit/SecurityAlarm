import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconColor: "red",
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

const icons = L.icon({
  iconSize: [25, 41],
  iconColor: "red",
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});
const MapComponent = ({ coords }) => {
  const handleDragEnd = (e) => {
    const { lat, lng } = e.target.getLatLng();
    console.log(`Lat: ${lat}, Lng: ${lng}`);
  };
  return (
    <div>
      <LeafletMap
        style={{ height: "50vh" }}
        center={[24.5937, 80.8593750]}
        zoom={2}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {coords?.map((cods,i) => (
          <Marker
            key={i}
            position={[cods.lat, cods.lng]}
            icon={cods.anomalies ? icons : icon}
            ondragend={handleDragEnd}
          >
            <Popup>Popup for any custom information.</Popup>
          </Marker>
        ))}
      </LeafletMap>
    </div>
  );
};

export default MapComponent;
