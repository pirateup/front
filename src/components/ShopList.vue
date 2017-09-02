<template>
    <div class="shops-list">
        <article class="shop" v-for="shop in shops">
           <img :src="shop.img" class="shop__img" />
           <span class="shop__name">{{ shop.name }}</span>
           <span class="shop__distance">{{ shop.distance }}</span>
           <address class="shop__address">{{ shop.street }}</address>
           <router-link :to='{path: `/shop-on-map/${shop.id}`}'>View on map</router-link>
           <p class='shop__tag'>{{ shop.tag }}</p>
       </article>
    </div>
</template>

<script>

export default
{
    name: 'shop-list',
    props: ['shops'],
};
</script>

<style scoped>

.shops-list
{
    display: inline-block;
}

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
