<template>
    <div class="search-by-name">
        <span>Testing test</span>
        <shop-list :shops="shops" />
   </div>
</template>

<script>
import ShopList from '@/components/ShopList';

export default
{
    name: 'search-shop-by-name',
    data ()
    {
        return {

        };
    },
    computed:
    {

    },
    components:
    {
        ShopList,
    },
};
</script>

<style scoped>


</style>
