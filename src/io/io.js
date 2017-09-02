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

export function requestNearbyShops (location)
{
    return HTTP.get(`nearby?latitude=${location.latitude}&longitude=${location.longitude}`);
}

export function registerShop (shopData)
{
    return HTTP.post('shops', shopData);
}

export function requestSearchByName (name)
{
    return HTTP.get(`shop?name=${name}`);
}

export function requestSearchByTag (tag)
{
    return HTTP.get(`shop?tag=${tag}`);
}
