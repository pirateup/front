import Vue from 'vue';
import Router from 'vue-router';

import NearbyShops from '@/components/NearbyShops';

Vue.use(Router);

export default new Router({
    routes:
    [
        {
            path: '/',
            name: 'NearbyShops',
            component: NearbyShops,
        },
        {
            path: '/nearby-shops',
            name: 'NearbyShops',
            component: NearbyShops,
        },
    ],
});
