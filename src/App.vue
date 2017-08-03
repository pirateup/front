<template>
  <div id="app" class='container' >
    <div>
        <img src='./assets/search.png' v-on:click='setSearchLocatonFieldVisibility'/>
        <div v-if='searchLocationFieldVisib'>
            <AutocompleteLocation />
        </div>
    </div>
    <div>
        <img src="./assets/logo.png">
    </div>
    <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/map">Show Map</router-link></li>
        <li><router-link to="/nearby-shops">Nearby shops</router-link></li>
    </ul>
    <div>Your coords: {{location}}</div>
    <router-view></router-view>
  </div>
</template>
<script>
import Store from './store/store';
import AutocompleteLocation from './components/AutocompleteLocation';

export default
{
    name: 'app',
    components: { AutocompleteLocation },
    created: () =>
    {
        // todo:
        // to be refactored => shall move to action
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
    computed:
    {
        searchLocationFieldVisib ()
        {
            return this.$store.getters.searchLocationFieldVisib;
        },
        location ()
        {
            return this.$store.getters.location;
        },
    },
    methods:
    {
        setSearchLocatonFieldVisibility ()
        {
            Store.dispatch('setSearchLocatonFieldVisibility');
        },
    },
};
</script>

<style>
img {
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;
}
input {
    float: left;
    display: inline;
}
</style>
