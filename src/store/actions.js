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
    placeChange (context, location)
    {
        const value = calculateMiddlefromCoords(location);
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
