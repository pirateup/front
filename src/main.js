import Vue from 'vue';

import App from './App';
import router from './router';
/* eslint-disable no-unused-vars */
import store from './store/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
