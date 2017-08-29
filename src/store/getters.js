export default
{
    nearbyShops (state)
    {
        return state.nearbyShops;
    },
    shopCoords (state)
    {
        return id =>
        ({ lat: state.nearbyShops.find(shop => shop.id === id).location[0],
            lng: state.nearbyShops.find(shop => shop.id === id).location[1] });
    },
    userLocation (state)
    {
        // for reference while refactoring
        // return { lat: state.location.latitude, lng: state.location.longitude };
        return state.location;
    },
    zoom ()
    {
        // zoom will determinate how far from user we are looking
        // for shop or how far is shop from the user
        // for example user is looking around 1 km of his cords
        // so zoom needs to be calculated to show client and shop
        // both on the map, or if user is searching from unknown or
        // far location zoom will be set to comfortably view the Map

        // this is only temporary
        return 15;
    },
};
