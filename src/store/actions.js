import * as io from '@/io/io';

export default
{
    setLocation (context, value)
    {
        context.commit({
            type: 'setLocation',
            value,
        });
    },
    // This should be triggered by something
    updateNearbyShops (context)
    {
        // extract current location from context
        io.requestNearbyShops({ latitude: 10.2, longitude: 20.1 })
        .then(shops =>
        {
            context.commit({
                type: 'updateNearbyShops',
                shops,
            });
        });
    },
};
