export default
{
    setLocation (state, { value })
    {
        state.location = [value.latitude, value.longitude];
    },
};
