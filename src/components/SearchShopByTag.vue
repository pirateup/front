<template>
    <div class="search-by-tag">
        <select v-on:change="showSearchResults($event)">
            <option v-for="tag in tags" :value='tag'>{{ tag }}</option>
        </select>
        <shop-list :shops="shops" />
   </div>
</template>

<script>
import { requestSearchByTag } from '@/io/io';
import ShopList from '@/components/ShopList';

export default
{
    name: 'search-shop-by-tag',
    data ()
    {
        return {
            query: '',
            shops: [],
            // TODO:
            // tagsArray:
            // hard coded for basic implementation
            // set to be fetched from server
            tags: [
                'florist',
                'grocery',
                'pharmacy',
                'newsstand',
                'butcher',
                'bakery',
                'cafe',
                'coffeshop',
                'clothes',
                'furnishings',
            ],
        };
    },
    methods:
    {
        showSearchResults (event)
        {
            requestSearchByTag(event.target.value)
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
    },
};
</script>

<style scoped>

input
{
    display: block;
}

</style>
