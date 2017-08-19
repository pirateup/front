export default
{
    setLocation (state, { value })
    {
        state.location = { latitude: value.latitudeMidPoint, longitude: value.longitudeMidPoint };
    },
};
