<template>
    <form @submit.prevent="form_submit">
        <InputField type="email" placeholder="Email Address" v-model="email" />
        <InputField placeholder="Username" v-model="username" />
        <InputField type="password" placeholder="Password" v-model="password" />
        <InputField type="password" placeholder="Password Confirm" v-model="password_confirm" />
        <ToggleButton :options="[{ label: 'I am looking for a job', value: 'candidate' }, { label: 'I want to hire', value: 'employer' }]" v-model="type" />
        <Button type="submit" label="Register" />
        <Button label="Back to Login" color="black" @click="$router.push({ name: 'auth-login' })" />
    </form>
</template>

<script>
import {defineComponent} from 'vue'
import InputField from "@/components/form/InputField.vue";
import ToggleButton from "@/components/form/ToggleButton.vue";
import Button from "@/components/form/Button.vue";

export default defineComponent({
    name: "AuthRegister",
    components: { InputField, ToggleButton, Button },
    data() {
        return {
            email: null,
            username: null,
            password: null,
            password_confirm: null,
            type: null // User Type
        }
    },
    methods: {
        form_submit() {
            console.log( this.email, this.username, this.password, this.password_confirm, this.type )

            this.$router.push({  })
        }
    }
})
</script>

<style scoped>

</style>