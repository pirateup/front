import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import NearbyShops from '@/components/NearbyShops';
import ShopOnMap from '@/components/ShopOnMap';
import UserLocationMap from '@/components/UserLocationMap';

Vue.use(Router);

export default new Router({
    routes:
    [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/nearby-shops',
            name: 'NearbyShops',
            component: NearbyShops,
        },
        {
            path: '/shop-on-map/:id',
            name: 'shop-on-map',
            component: ShopOnMap,
        },
        {
            path: '/map',
            name: 'user-location-map',
            component: UserLocationMap,
        },
    ],
});
