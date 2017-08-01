export default
{
    nearbyShops (state)
    {
        return state.nearbyShops;
    },
    location (state)
    {
        return state.location;
    },
    geoloc (state)
    {
        return state.geoloc;
    },
    wantSearchLocation (state)
    {
        return state.wantSearchLocation;
    },
    shopCoords (state)
    {
        return id =>
        ({ lat: state.nearbyShops.find(shop => shop.id === id).location[0],
            lng: state.nearbyShops.find(shop => shop.id === id).location[1] });
    },
    zoom (state)
    {
        return state.zoom;
    },
    searchLocationFieldVisib (state)
    {
        return state.searchLocationFieldVisib;
    },
};
