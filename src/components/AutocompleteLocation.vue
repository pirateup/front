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
        placeChange (e)
        {
            console.log(e);
            console.dir(e.geometry.viewport.b);
            console.dir(e.geometry.viewport.f);
        },
    },
    computed:
    {
    },
};
</script>

<style scoped>

</style>