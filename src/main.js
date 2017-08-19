import Vue from 'vue';

import App from './App';
import store from './store/store';
import router from './router';

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
                this.$store.dispatch('setLocation', position.coords);
            });
        }
    },
});
