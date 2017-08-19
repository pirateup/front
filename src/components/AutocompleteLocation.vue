<template>
    <GmapPlaceInput
    placeholder='Enter location You are searching for...'
    v-on:place_changed='placeChange'
    >
    </GmapPlaceInput>
</template>

<script>

export default
{
    name: 'autocomplete-location',
    methods:
    {
        placeChange (event)
        {
            if (event.geometry.viewport)
            {
// this calculation is needed as google is returning segment of coords object not coords object
                const locationCalculatorFromGoogleObject = locationSegmet =>
                {
                    const latitudeSegment = locationSegmet.f.b + locationSegmet.f.f;
                    const longitudeSegment = locationSegmet.b.b + locationSegmet.b.f;
                    const latitudeMidPoint = latitudeSegment / 2;
                    const longitudeMidPoint = longitudeSegment / 2;
                    return {
                        latitude: latitudeMidPoint,
                        longitude: longitudeMidPoint,
                    };
                };
                this.$store.dispatch('placeChange', locationCalculatorFromGoogleObject(event.geometry.viewport));
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
