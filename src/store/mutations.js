export default
{
    setLocation (state, { value })
    {
        state.location = [value.latitude, value.longitude];
    },
    updateNearbyShops (state, { shops })
    {
        state.nearbyShops = shops;
    },
};
