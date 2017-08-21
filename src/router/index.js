import Vue from 'vue';
import Router from 'vue-router';

import NearbyShops from '@/components/NearbyShops';
import ShopOnMap from '@/components/ShopOnMap';
import UserLocationMap from '@/components/UserLocationMap';
import RegisterShop from '@/components/RegisterShop';

Vue.use(Router);

export default new Router({
    routes:
    [
        {
            path: '/',
            name: 'Main',
            component: NearbyShops,
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
        {
            path: '/register-shop',
            name: 'RegisterShop',
            component: RegisterShop,
        },
    ],
});
