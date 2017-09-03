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
        io.requestNearbyShops(context.getters.userLocation)
        .then(shops =>
        {
            context.commit({
                type: 'updateNearbyShops',
                shops,
            });
        });
    },
    setShopTags (context)
    {
        io.requestTags()
        .then(tags =>
        {
            context.commit({
                type: 'setShopTags',
                tags,
            });
        });
    },
};
