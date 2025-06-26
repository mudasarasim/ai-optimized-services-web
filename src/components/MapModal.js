import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// ✅ Create a custom FontAwesome-based marker icon
const customIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="color: red; font-size: 30px;"><i class="fas fa-map-marker-alt"></i></div>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const LocationSelector = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
};

const MapModal = ({ onClose, onLocationSelect }) => {
  const [position, setPosition] = useState({ lat: 25.276987, lng: 55.296249 });
  const [loading, setLoading] = useState(false);

  const fetchLocationName = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lng}`
      );
      const data = await response.json();
      const name = data.display_name || `${position.lat}, ${position.lng}`;
      onLocationSelect(name);
    } catch (error) {
      console.error("Failed to fetch address:", error);
      onLocationSelect(`${position.lat}, ${position.lng}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="map-modal-overlay">
      <div className="map-modal-content">
        <h4>Select Location on Map</h4>

        <MapContainer
          center={[25.276987, 55.296249]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: '300px', width: '100%', marginBottom: '15px' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
          <LocationSelector setPosition={setPosition} />
          <Marker position={position} icon={customIcon} />
        </MapContainer>

        <button
          className="btn btn-primary mb-2"
          onClick={fetchLocationName}
          disabled={loading}
        >
          {loading ? 'Finding...' : 'Confirm Location'}
        </button>
        <br />
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MapModal;
