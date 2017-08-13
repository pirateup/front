<template>
    <div class="register-form">
        <form v-show="!isDone">
            <label for="register-form__name-input">Shop name</label>
            <input type="text" id="register-form__name-input" placeholder="Your awesome shop" v-model="name">

            <fieldset class="register-form__address">
                <legend>address</legend>

                <label for="register-form__city-input">City</label>
                <input type="text" id="register-form__city-input" placeholder="Townsville" v-model="city">

                <label for="register-form__street-input">Street</label>
                <input type="text" id="register-form__street-input" placeholder="Main Street 9" v-model="street">

                <label for="register-form__zip-input">Zip code</label>
                <input type="text" id="register-form__zip-input" placeholder="10-222" v-model="zip">
            </fieldset>

            <input type="submit" value="Register" @click="handleRegister()" class="register-form__submit-button">
        </form>
        <div v-if="!isValid" class="register-form__validation-error">Coś zjebałeś ziom</div>
        <div v-if="isErr" class="register-form__negative-feedback">Err motzno!</div>
        <div v-if="isDone" class="register-form__positive-feedback">Skończone!</div>
   </div>
</template>

<script>
export default
{
    name: 'register-shop',
    data ()
    {
        return {
            name: '',
            city: '',
            street: '',
            zip: '',
        };
    },
    computed:
    {

    },
    methods:
    {
        handleRegister ()
        {
        },
    },
};
</script>

<style scoped>


</style>
