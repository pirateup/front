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
export default {
    name: 'app',
    created: () =>
    {
    
    },
};
</script>

<style>
/*
Vue basic grid - please do not delete until full skeleton will be build
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
*/

/*
Basic style as global for all componeents
Structure is focused on keeping in mind mobile first
With changing please first comment out do not delete
*/
@import './assets/css/basic.css';
</style>
