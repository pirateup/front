// import utility functions
import calculateMiddlefromCoords from '../utility/calculateMiddlefromCoords';

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
        const value = calculateMiddlefromCoords(location);
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
