import Vue from 'vue';

import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App';
import store from './store/store';
import router from './router';

Vue.use(VueGoogleMaps, {
    load:
    {
        key: process.env.API_KEY,
        libraries: 'places',
    },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
