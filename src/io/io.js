import axios from 'axios';

axios.interceptors.response.use(
    undefined,
    // passes error down the Promise chain
    error => Promise.reject(error),
);

const baseURL = process.env.BACKEND_URL;

const HTTP = axios.create({
    baseURL,
    headers: {},
});

// Remove this and below line after adding another function to the io
/* eslint-disable */
export function requestNearbyShops (location)
{
    return HTTP.get(`nearby?latitude=${location.latitude}&longitude=${location.longitude}`)
    .then(response => response.data);
}
