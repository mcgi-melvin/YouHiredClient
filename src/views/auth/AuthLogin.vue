<template>
    <form @submit.prevent="form_submit">
        <InputField placeholder="Username or Email" v-model="user"></InputField>
        <InputField type="password" placeholder="Password" v-model="password" />
        <Button type="submit" label="Login"></Button>
        <Button label="Create an Account" color="secondary" @click="$router.push({ name: 'auth-register' })"></Button>
        <Button label="Forgot Password" color="black" @click="$router.push({ name: 'auth-forgot-password' })"></Button>
    </form>
</template>

<script>
import {defineComponent} from 'vue'
import InputField from "@/components/form/InputField.vue";
import Button from "@/components/form/Button.vue";

export default defineComponent({
    name: "AuthLogin",
    components: { InputField, Button },
    data() {
        return {
            user: null,
            password: null
        }
    },
    methods: {
        form_submit(e) {
            console.log( this.user, this.password )
        }
    }
})
</script>

<style scoped>

</style>