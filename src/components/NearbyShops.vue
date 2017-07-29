<template>
    <div class="shops-list">
        <article class="shop" v-for="shop in shops">
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
    name: 'hello',
    data ()
    {
        return {
            // Array is expected to be sorted by distance, asc
            shops:
            [
                { name: 'U Jadźki', distance: 300, street: 'Ketonowa 7', img: 'https://s-media-cache-ak0.pinimg.com/736x/a3/03/61/a30361985814a564e8b87515bb373661--shop-facade-coffeeshops.jpg' },
                { name: 'U Józka', distance: 500, street: 'Betonowa 9', img: 'https://s-media-cache-ak0.pinimg.com/736x/a3/03/61/a30361985814a564e8b87515bb373661--shop-facade-coffeeshops.jpg' },
            ],
        };
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
