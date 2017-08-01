export default
{
    setLocation (context, value)
    {
        context.commit({
            type: 'setLocation',
            value,
        });
    },
    setSearchLocatonFieldVisibility (context)
    {
        context.commit('setSearchLocatonFieldVisibility');
    },
};
