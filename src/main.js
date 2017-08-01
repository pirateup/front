import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

import App from './App';
import store from './store/store';
import router from './router';

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.API_KEY,
        libraries: 'places',
    },
});

Vue.config.productionTip = false;

console.log(VueGoogleMaps);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
