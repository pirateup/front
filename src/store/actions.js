// import utility functions
import calculateMiddleformCoords from '../utility/calculateMiddleformCoords';

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
    placeChange (context, location)
    {
        const value = calculateMiddleformCoords(location);
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
