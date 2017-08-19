export default
{
    setLocation (state, { value })
    {
        state.location = { latitude: value.latitude, longitude: value.longitude };
        // state.location = [value.latitude, value.longitude];
    },
};
