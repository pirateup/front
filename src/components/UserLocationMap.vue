<template>
    <div class="columns">
        <gmap-map :center='userLocation' :zoom='zoom' class='map_user'>
            <gmap-marker key="" :position="userLocation" clickable="true" draggable="false" @click="placeClicked" />
        </gmap-map>
    </div>
</template>

<script>
export default
{
    name: 'user-location-map',
    methods:
    {
        placeClicked ()
        {
        },
    },
    computed:
    {
        userLocation ()
        {
            return this.$store.getters.userLocation;
        },
        zoom ()
        {
            return this.$store.getters.zoom;
        },
    },
};
</script>

<style scoped>
.map_user {
    position: absolute;
    display: box;
    margin: 0 auto;
    width: 98%;
    height: 80%;
}
</style>
