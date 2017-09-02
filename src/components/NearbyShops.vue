<template>
    <shop-list :shops="nearbyShops" />
</template>

<script>
import ShopList from '@/components/ShopList';

export default
{
    name: 'nearby-shops',
    computed:
    {
        location ()
        {
            return this.$store.getters.location;
        },
        nearbyShops ()
        {
            return this.$store.getters.nearbyShops;
        },
    },
    components:
    {
        ShopList,
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
