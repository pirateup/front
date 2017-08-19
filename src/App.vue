<template>
  <div id="app" class='container' >
    <img src="./assets/logo.png">
    <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/nearby-shops">Nearby shops</router-link></li>
        <li><router-link to="/register-shop">Register shop</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>

export default
{
    name: 'app',
};
</script>

<style>

</style>
