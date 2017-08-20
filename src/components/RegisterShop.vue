<template>
    <div class="register-form">
        <form v-show="!isDone">
            <label for="register-form__name-input">Shop name</label>
            <input type="text" id="register-form__name-input" placeholder="Your awesome shop" v-model="shop.name">

            <fieldset class="register-form__address">
                <legend>address</legend>

                <label for="register-form__city-input">City</label>
                <input type="text" id="register-form__city-input" placeholder="Townsville" v-model="shop.city">

                <label for="register-form__street-input">Street</label>
                <input type="text" id="register-form__street-input" placeholder="Main Street 9" v-model="shop.street">

                <label for="register-form__zip-input">Zip code</label>
                <input type="text" id="register-form__zip-input" placeholder="10-222" v-model="shop.zip">
            </fieldset>

            <input type="submit" value="Register" @click="handleRegister()" class="register-form__submit-button">
        </form>
        <div v-if="!isValid" class="register-form__validation-error">Coś zjebałeś ziom</div>
        <div v-if="isError" class="register-form__negative-feedback">error motzno!</div>
        <div v-if="isDone" class="register-form__positive-feedback">Skończone!</div>
   </div>
</template>

<script>
import { registerShop } from '@/io/io';

export default
{
    name: 'register-shop',
    data ()
    {
        return {
            shop:
            {
                name: '',
                city: '',
                street: '',
                zip: '',
            },
            isDone: false,
            error: '',
        };
    },
    computed:
    {
        isValid ()
        {
            // todo: just a placeholder, shall be expanded in the future
            return true;
        },
        isError ()
        {
            return (this.error !== '');
        },
    },
    methods:
    {
        handleRegister ()
        {
            if (this.isValid)
            {
                // this is only shallow copy, be aware
                const shopData = Object.assign({}, this.shop);

                registerShop(shopData)
                .then(() =>
                {
                    this.isDone = true;
                })
                .catch(error =>
                {
                    this.error = error;
                });
            }
        },
    },
};
</script>

<style scoped>


</style>
