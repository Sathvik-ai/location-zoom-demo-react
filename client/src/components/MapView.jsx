import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Circle, Fill, Stroke } from 'ol/style';
import './MapView.css';

const MapView = ({ active, userLocation, isAnimating, setLabelText, setShowLabel }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const hasRunSequence = useRef(false);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      }),
      controls: []
    });

    mapInstanceRef.current = map;

    return () => {
      map.setTarget(null);
    };
  }, []);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const addUserMarker = (location) => {
    if (!mapInstanceRef.current) return;

    const marker = new Feature({
      geometry: new Point(fromLonLat([location.lon, location.lat]))
    });

    const markerStyle = new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: 'rgba(255, 0, 0, 0.8)'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 3
        })
      })
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    mapInstanceRef.current.addLayer(vectorLayer);
  };

  const startZoomSequence = async () => {
    if (!mapInstanceRef.current || !userLocation) return;

    const map = mapInstanceRef.current;
    const view = map.getView();

    // Fetch location info from backend
    try {
      const response = await axios.get(`/api/location-info?lat=${userLocation.lat}&lon=${userLocation.lon}`);
      if (response.data.success) {
        setLocationInfo(response.data.location);
      }
    } catch (error) {
      console.error('Error fetching location info:', error);
    }

    // Determine continent based on coordinates
    let continent = 'Earth';
    let continentCenter = [0, 0];
    
    if (userLocation.lon >= -25 && userLocation.lon <= 60 && userLocation.lat >= 35 && userLocation.lat <= 71) {
      continent = 'Europe';
      continentCenter = [15, 50];
    } else if (userLocation.lon >= 25 && userLocation.lon <= 140 && userLocation.lat >= -10 && userLocation.lat <= 55) {
      continent = 'Asia';
      continentCenter = [85, 25];
    } else if (userLocation.lon >= -20 && userLocation.lon <= 55 && userLocation.lat >= -35 && userLocation.lat <= 37) {
      continent = 'Africa';
      continentCenter = [20, 0];
    } else if (userLocation.lon >= -170 && userLocation.lon <= -35 && userLocation.lat >= -55 && userLocation.lat <= 70) {
      continent = 'Americas';
      continentCenter = [-95, 40];
    } else if (userLocation.lon >= 110 && userLocation.lon <= 180 && userLocation.lat >= -50 && userLocation.lat <= -10) {
      continent = 'Australia';
      continentCenter = [135, -25];
    }

    // Define detailed zoom sequence
    const steps = [
      {
        center: fromLonLat([0, 0]),
        zoom: 2,
        label: 'Planet Earth 🌍',
        duration: 2000
      },
      {
        center: fromLonLat(continentCenter),
        zoom: 3.5,
        label: `Zooming to ${continent}`,
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 5,
        label: locationInfo?.country || 'Your Country',
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 7,
        label: locationInfo?.state || 'Your State/Region',
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 10,
        label: locationInfo?.district || locationInfo?.state || 'Your District',
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 13,
        label: locationInfo?.city || 'Your City',
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 16,
        label: `📍 Your Location`,
        duration: 2000
      },
      {
        center: fromLonLat([userLocation.lon, userLocation.lat]),
        zoom: 18,
        label: `Lat: ${userLocation.lat.toFixed(6)}°, Lon: ${userLocation.lon.toFixed(6)}°`,
        duration: 2000
      }
    ];

    // Execute zoom sequence
    for (const step of steps) {
      setLabelText(step.label);
      setShowLabel(true);

      view.animate({
        center: step.center,
        zoom: step.zoom,
        duration: step.duration
      });

      await delay(step.duration + 1000);
    }

    // Add marker at user location with pulsing effect
    addUserMarker(userLocation);
    
    // Show final coordinates
    setTimeout(() => {
      setLabelText(`📍 ${locationInfo?.city || 'Your Location'} | Lat: ${userLocation.lat.toFixed(6)}° | Lon: ${userLocation.lon.toFixed(6)}°`);
    }, 1000);
  };

  useEffect(() => {
    if (active && userLocation && mapInstanceRef.current && !hasRunSequence.current) {
      hasRunSequence.current = true;
      startZoomSequence();
    }
    
    // Reset when not active
    if (!active) {
      hasRunSequence.current = false;
    }
  }, [active, userLocation]);

  return (
    <div className={`zoom-layer map-view ${active ? 'active' : ''}`}>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default MapView;
