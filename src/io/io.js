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

HTTP.get('posts').then(response => { console.log(response.data); });

// Remove this and below line after adding another function to the io
/* eslint-disable */
export function requestNearbyShops ()
{
    return HTTP.get('nearby-shops')
    .then(response => response.data);
}
