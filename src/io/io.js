import axios from 'axios';

const baseURL = process.env.BACKEND_URL;

const HTTP = axios.create({
    baseURL,
    headers: {},
});

HTTP.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error), // "rethrows" error
);

// Remove this and below line after adding another function to the io
/* eslint-disable */
export function requestNearbyShops (location)
{
    return HTTP.get(`nearby?latitude=${location.latitude}&longitude=${location.longitude}`);
}
