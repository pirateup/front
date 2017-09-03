export default
{
    setLocation (state, { location: { latitude, longitude } })
    {
        // from G_maps branch -> if something doesn't work test this
        // if all works please delete
        // state.location = { latitude: value.latitude, longitude: value.longitude };

        // Parameter destructing in order to allow raw output from geolocation API
        state.location = { latitude, longitude };
    },
    updateNearbyShops (state, { shops })
    {
        state.nearbyShops = shops;
    },
    setShopTags (state, { tags })
    {
        state.tags = tags;
    },
};
