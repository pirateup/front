<template>
    <GmapPlaceInput
    placeholder='Enter location You are searching for...'
    v-on:place_changed='placeChange'
    >
    </GmapPlaceInput>
</template>

<script>

/*
    Google represents a point as two sections
    We represent a point by longitude and latitude
    Intersection (which happens in the middle of each)
    of those sections gives a point in desired notation
*/
function GmapObjectToLocation (GmapObject)
{
    const latitudeBegin = GmapObject.f.b;
    const latitudeEnd = GmapObject.f.f;

    const longitudeBegin = GmapObject.b.b;
    const longitudeEnd = GmapObject.b.f;

    const latitudeMidPoint = (latitudeBegin + latitudeEnd) / 2;
    const longitudeMidPoint = (longitudeBegin + longitudeEnd) / 2;

    const location = {
        latitude: latitudeMidPoint,
        longitude: longitudeMidPoint,
    };

    return location;
}

export default
{
    name: 'autocomplete-location',
    methods:
    {
        placeChange (event)
        {
            if (event.geometry.viewport)
            {
                const GmapObject = event.geometry.viewport;
                const location = GmapObjectToLocation(GmapObject);

                this.$store.dispatch('setLocation', location);
            }
        },
    },
    computed:
    {
    },
};

</script>

<style scoped>

</style>
