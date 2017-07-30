export default
{
    // updatePrice (state, { price })
    // {
    //     state.price = price;
    // },
    setLocation (state, { value })
    {
        state.location = [value.latitude, value.longitude];
    },
};
