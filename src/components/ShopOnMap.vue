<template>
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
</template>

<script>
export default
{
    name: 'shop-on-map',
    methods:
    {
        shopClicked ()
        {
            // this method will be called to interact with shop
            // for example to view distance information from the
            // user
        },
    },
    computed:
    {
        zoom ()
        {
            return this.$store.getters.zoom;
        },
        shopCoords ()
        {
            return this.$store.getters.shopCoords(this.$route.params.id);
        },
    },
};
</script>

<style scoped>
.map_shop {
    position: absolute;
    display: box;
    margin: 0 auto;
    width: 98%;
    height: 80%;
}
</style>
