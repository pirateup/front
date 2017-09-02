<template>
        <gmap-map :center='userLocation' :zoom='zoom' class='map_user'>
            <gmap-marker key="" :position="userLocation" clickable="true" draggable="false" @click="placeClicked" />
        </gmap-map>
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
            const { latitude, longitude } = this.$store.getters.userLocation;

            return { lat: latitude, lng: longitude };
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
