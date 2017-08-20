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
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
