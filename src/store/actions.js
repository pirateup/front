export default
{
    setLocation (context, value)
    {
        context.commit({
            type: 'setLocation',
            value,
        });
    },
    placeChange (context, value)
    {
        console.log(value);
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
