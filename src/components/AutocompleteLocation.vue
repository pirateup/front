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
            if (e.geometry.viewport)
            {
                const location = e.geometry.viewport;
                this.$store.dispatch('placeChange', location);
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
