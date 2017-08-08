export default
{
    setLocation (state, { location: { latitude, longitude } })
    {
        // Parameter destructing in order to allow raw output from geolocatin API
        state.location = { latitude, longitude };
    },
    updateNearbyShops (state, { shops })
    {
        state.nearbyShops = shops;
    },
};
