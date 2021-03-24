import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {
        return (
            <MapContainer center={props.position} zoom={10} scrollWheelZoom={false} style={{
                height: '50vh',
                width: '100%',
                display: 'block',
                margin: '0 auto'
            }}>
            <TileLayer
            attribution='&copy; <Link to="http://osm.org/copyright">OpenStreetMap</Link> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
                <Marker position={props.position}>
                    <Popup> 
                        {props.popup}
                    </Popup>
                </Marker> 
            </MapContainer>
        );
    };

export default Map;