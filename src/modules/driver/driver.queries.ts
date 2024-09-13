import { useQuery } from 'react-query';
import axios from 'axios';
import { Driver, GetDriverParams } from './driver.type';

export const useGetDriver = (params: GetDriverParams) => {
  return useQuery({
    queryKey: ['params', params],
    queryFn: async () => {
      const { latitude, longitude, count } = params;
      try {
        const { data } = await axios.get('https://qa-interview-test.qa.splytech.dev/api/drivers', {
          params: { latitude, longitude, count }
        });

        const drivers: Driver[] = data.drivers.map((driver: any) => ({
          driverId: driver.driver_id,
          location: driver.location
        }));

        return { ...data, drivers };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
        throw new Error('Failed to fetch driver location');
      }
    },
  });
};