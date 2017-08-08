import * as io from '@/io/io';

export default
{
    setLocation (context, location)
    {
        context.commit({
            type: 'setLocation',
            location,
        });
    },
    // This should be triggered by something
    updateNearbyShops (context)
    {
        io.requestNearbyShops(context.getters.location)
        .then(shops =>
        {
            context.commit({
                type: 'updateNearbyShops',
                shops,
            });
        });
    },
};
