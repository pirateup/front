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
                /* TO DO: works correctly, there is an property in 
                location object named accuracy:
                Coordinates { latitude: 52.25, longitude: 21, altitude: 0, accuracy: 25000, altitudeAccuracy: 0, heading: NaN, speed: NaN }
                I propose to take in to account in the future setting of 
                user localization to avoid setting it to far from desired
                user searching position.
                */ 
                console.log(position.coords);
                this.$store.dispatch('setLocation', position.coords);
            });
        }
    },
});
