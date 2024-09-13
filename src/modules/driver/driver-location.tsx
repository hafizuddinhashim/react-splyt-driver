import React, { useState } from 'react';
import { useGetDriver } from './driver.queries';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Driver } from './driver.type';

import 'leaflet/dist/leaflet.css';
import driverCarImg from '../../icons/driver-car.png';
import L from 'leaflet';
import PrettoSlider from '../../components/pretto-slider';
import { Box, Typography } from '@mui/material';

interface DriverLocationProps {
  latitude: number;
  longitude: number;
  count?: number; // Optional
}

const DriverLocation: React.FC<DriverLocationProps> = ({latitude, longitude}) => {
  const [limit, setLimit] = useState(1);
  const { data, isLoading, isSuccess } = useGetDriver({ latitude, longitude, count: limit });
  const drivers = data?.drivers || [];

  const iconDriverVehicle = new L.Icon({
    iconUrl: driverCarImg,
    iconSize: [40, 40]
  });

  return (
    <>
      <Box sx={{
        width: '100svw',
        height: '100svh',
        position: 'relative'
      }}>
        <Box sx={{
            width: '10rem',
            position: 'absolute',
            bottom: '5svh',
            left: '5svw',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
         }}>
          <Box sx={{
            width: '100%',
            backgroundColor: '#212121',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {!isLoading && isSuccess? (
              <Typography variant="h4" sx={{ color: '#52af77' }}>
                {`${data.pickup_eta} min`}
              </Typography>
              ) : (
                <Typography variant="h4" sx={{ color: '#999' }}>
                  Loading...
                </Typography>
              )}
            <Typography variant="overline" sx={{ color: '#ffffff' }}>
              pick up eta
            </Typography>
          </Box>
          <Box sx={{
            width: '100%',
            backgroundColor: '#212121',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={1}
              max={50}
              min={1}
              onChange={(_event: Event, newLimit: number | number []) => {
                if (typeof newLimit === 'number') {
                  setLimit(newLimit);
                }
              }}
            />
            <Typography variant="overline" sx={{ color: '#ffffff' }}>
              set driver limit
            </Typography>
          </Box>
        </Box>
        <MapContainer center={[latitude,longitude]} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {drivers.map((driver: Driver) => (
            <Marker key={driver.driverId} position={[driver.location.latitude, driver.location.longitude]} icon={iconDriverVehicle}>
              <Popup>
                {`[${driver.location.latitude}, ${driver.location.latitude}]`}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </>
  );
};

export default DriverLocation;
