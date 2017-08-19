<template>
    <div class="columns">
    <GmapPlaceInput
    placeholder='Enter location You are searching for...'
    v-on:place_changed='placeChange'
    >
    </GmapPlaceInput>
    </div>
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
// this calculation is needed as google is returning segment object not coords object
                const locationCalculatorFromGoogleObject = locationSegmet =>
                {
                    const latitudeBegining = locationSegmet.f.b + locationSegmet.f.f;
                    const longitudeBegining = locationSegmet.b.b + locationSegmet.b.f;
                    const latitudeMidPoint = latitudeBegining / 2;
                    const longitudeMidPoint = longitudeBegining / 2;
                    return {
                        latitudeMidPoint,
                        longitudeMidPoint,
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
