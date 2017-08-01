<template>
  <div id="app" class='container' >
    <img src="./assets/logo.png">
    <div>
        <img src='./assets/search.png' v-on:click='setSearchLocatonFieldVisibility'/>
        <div v-if='searchLocationFieldVisib'>
            <AutocompleteLocation />
        </div>
    </div>
    <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/nearby-shops">Nearby shops</router-link></li>
    </ul>
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
            // setting to central London or gues location by id
            Store.dispatch('setLocation', { latitude: 52, longitude: -0.12 });
        }
    },
    computed:
    {
        searchLocationFieldVisib ()
        {
            return this.$store.getters.searchLocationFieldVisib;
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
    display: inline;
    cursor: pointer;
}
input {
    float: left;
}
</style>
