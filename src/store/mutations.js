export default
{
    setLocation (state, { value })
    {
        state.location = [value.latitude, value.longitude];
    },
    setSearchLocatonFieldVisibility (state)
    {
        state.searchLocationFieldVisib = !state.searchLocationFieldVisib;
    },
};
