<template>
    <div class="columns">
        <h3 v-if='location' >User location coords:  {{location[0]}} {{location[1]}}</h3>
        <gmap-map
            :center='shopCoords'
            :zoom='zoom'
            class='map_shop'
        >
            <gmap-marker
                :key=''
                :position='shopCoords'
                :clickable=true
                :draggable=false
                @click='shopClicked'
            >
            </gmap-marker>
        </gmap-map>
        <div></div>
    </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB-c3v8sMxEM5nDACJKUFBH4p_Up8eaFUs',
    },
});

export default
{
    name: 'shopOnMap',
    methods:
    {
        shopClicked ()
        {
            // this method will be called to interact with shop
            // for example to get back to shop information view
            alert('shop clicked');
        },
    },
    computed:
    {
        location ()
        {
            // dislays user location at this moment
            return this.$store.getters.location;
        },
        zoom ()
        {
            return this.$store.getters.zoom;
        },
        shopCoords ()
        {
            return {
                lat: this.$store.getters.nearbyShops
                .find(shop =>
                    shop.id === this.$route.params.id)
                .location[0],
                lng: this.$store.getters.nearbyShops
                .find(shop =>
                    shop.id === this.$route.params.id)
                .location[1],
            };
        },
    },
};
</script>

<style scoped>
.map_shop {
    position: absolute;
    display: box;
    margin: 0 auto;
    width: 80%;
    height: 80%;
    max-height: 600px;
    max-width: 600px;
}
</style>