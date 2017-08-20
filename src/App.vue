<template>
  <div id="app" class='container' >
    <div>
        <img src='./assets/setLocation.png' v-on:click='flipSearchLocatonFieldVisibility'/>
        <div v-if='searchLocationFieldVisib'>
            <ManualLocationSetter />
        </div>
    </div>
    <div>
        <img src="./assets/logo.png">
    </div>
    <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/map">Show Map</router-link></li>
        <li><router-link to="/nearby-shops">Nearby shops</router-link></li>
        <li><router-link to="/register-shop">Register shop</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import ManualLocationSetter from './components/ManualLocationSetter';


export default
{
    name: 'app',
    components: { ManualLocationSetter },
    data ()
    {
        return {
            searchLocationFieldVisib: false,
        };
    },
    computed:
    {
    },
    methods:
    {
        flipSearchLocatonFieldVisibility ()
        {
            this.searchLocationFieldVisib = !this.searchLocationFieldVisib;
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
