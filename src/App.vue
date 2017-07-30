<template>
  <div id="app" class='container' >
    <img src="./assets/logo.png">
    <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/nearby-shops">Nearby shops</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import Store from './store/store';

export default {
    name: 'app',
    created: () =>
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position =>
            {
                Store.dispatch('setLocation', position.coords);
            });
        }
        else
        {
            // setting to central London
            Store.dispatch('setLocation', { latitude: 52, longitude: -0.12 });
        }
    },
};
</script>

<style>
</style>
