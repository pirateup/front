<template>
    <div class="search-by-name">
        <input type="text" v-model="query" v-on:input="showSearchResults()">
        <shop-list :shops="shops" />
        <add-shop />
   </div>
</template>

<script>
import { requestSearchByName } from '@/io/io';
import ShopList from '@/components/ShopList';
import AddShop from '@/components/AddShop';

export default
{
    name: 'search-shop-by-name',
    data ()
    {
        return {
            query: '',
            shops: [],
        };
    },
    methods:
    {
        showSearchResults ()
        {
            requestSearchByName(this.query)
            .then(result =>
            {
                this.shops = result;
            })
            // todo: handle this better somehow
            .catch(sth => sth);
        },
    },
    components:
    {
        ShopList,
        AddShop,
    },
};
</script>

<style scoped>

input
{
    display: block;
}

</style>
