<template>
    <div class="shops-list">
        <article class="shop" v-for="shop in nearbyShops">
            <img :src="shop.img" class="shop__img" />
            <span class="shop__name">{{ shop.name }}</span>
            <span class="shop__distance">{{ shop.distance }}</span>
            <address class="shop__address">{{ shop.street }}</address>
            <!-- Link to navigation -->
        </article>
    </div>
</template>

<script>
export default
{
    name: 'nearby-shops',
    computed:
    {
        nearbyShops ()
        {
            return this.$store.getters.nearbyShops;
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
