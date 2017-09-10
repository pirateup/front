<template>
    <button type="button" @click="redirectToShopRegistration()">Add shop</button>
</template>

<script>

export default
{
    name: 'add-shop',
    methods:
    {
        redirectToShopRegistration ()
        {
            this.$router.push('register-shop');
        },
    },
};
</script>

<style scoped>

</style>
