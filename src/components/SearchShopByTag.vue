<template>
    <div class="search-by-tag">
        <select v-model='selected' v-on:change="showSearchResults()">
            <option disabled value=''>Please select shop type</option>
            <option v-for="tag in tags" v-bind:value='tag'>{{ tag }}</option>
        </select>
        <shop-list :shops="shops" />
        <add-shop />
   </div>
</template>

<script>
import { requestSearchByTag } from '@/io/io';
import ShopList from '@/components/ShopList';
import AddShop from '@/components/AddShop';

export default
{
    name: 'search-shop-by-tag',
    data ()
    {
        return {
            query: '',
            shops: [],
            selected: '',
        };
    },
    computed:
    {
        tags ()
        {
            return this.$store.getters.tags;
        },
    },
    created ()
    {
    },
    methods:
    {
        showSearchResults ()
        {
            requestSearchByTag(this.selected)
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
