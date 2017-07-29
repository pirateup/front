<template>
  <div class="columns shops-list">
        <h3 v-if='location' >User location coords:  {{location[0]}} {{location[1]}} </h3>
    </div>
</template>

<script>
export default
{
    name: 'hello',
    computed:
    {
        location ()
        {
            return this.$store.getters.location;
        },
    },
};
</script>

<style scoped>

.shop
{
    background-color: yellow;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 3rem;
}

.shop__distance:after
{
    /* distance unit */
    content: " m";
}

.shop__img
{
    margin-right: 1em;
    border-radius: 100%;
    width: 5rem;
}

.shop__address
{
    display: inline-block;
}

</style>
