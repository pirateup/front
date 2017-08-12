export default
{
    setLocation (state, { value })
    {
        state.location = [value.latitude, value.longitude];
    },
    flipSearchLocatonFieldVisibility (state)
    {
        state.searchLocationFieldVisib = !state.searchLocationFieldVisib;
    },
};
