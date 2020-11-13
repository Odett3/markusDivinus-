import React, { useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../style/map.css";
import { Link } from "react-router-dom";


export default function MapComponent() {

  const stores = [{"id": 2, "lat": 35.892267, "lng": 14.462837, "name": "Farsons Direct"},

{"id": 1, "lat": 35.934740, "lng": 14.412730, "name": "Hansa"},

  ]

  

  

  const mwl = new Icon({
    iconUrl:
      "https://res.cloudinary.com/dztzswpcp/image/upload/v1602709855/markusDivinus/Screenshot_2020-10-14_at_23.10.37_hdhcn3.png",
    iconSize: [35, 35],
  });

  return (
    <div>
      <div p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Map center={[35.891275, 14.442418]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {stores.map((store) => {
            return (
              <>
                <Marker icon={mwl} key={store.id} position={[store.lat, store.lng]}>
                  <Popup>

                    <div>
{store.name}

                    </div>
                    
                  </Popup>
                </Marker>
              </>
            );
          })}
        </Map>
      </div>
    </div>
  );
}