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
    created ()
    {
        // to be refactored => shall move to action
        // is this to be called here?
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position =>
            {
                console.log(position.coords);
                this.$store.dispatch('setLocation', position.coords);
            });
        }
    },
});
