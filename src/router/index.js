import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import NearbyShops from '@/components/NearbyShops';

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
    ],
});
