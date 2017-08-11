import * as io from '@/io/io';

export default
{
    setLocation (context, location)
    {
        context.commit({
            type: 'setLocation',
            location,
        });

        // With every location change nearby shops may changed
        context.dispatch('updateNearbyShops');
    },
    updateNearbyShops (context)
    {
        // TODO: Some kind of guard to prevent sending a request every second
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
