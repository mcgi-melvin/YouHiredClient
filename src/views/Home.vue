<template>
    <main class="position-relative bg-cover d-flex align-items-center justify-content-center">
        <div class="container position-relative">
            <div class="section-header">
                <img src="../assets/images/logo.png" alt="App Logo" />
            </div>
            <div class="section-action">
                <Button label="Login" @click="$router.push({ name: 'auth-login' })"></Button>
                <Button label="Create an account" color="secondary" @click="$router.push({ name: 'auth-register' })"></Button>
            </div>
        </div>
    </main>
</template>

<script>
import {defineComponent} from 'vue'
import Button from "@/components/form/Button.vue";

export default defineComponent({
    name: "Home",
    components: { Button },
    mounted() {
        setTimeout(() => document.querySelector('.container').classList.add('show'), 1000)
    }
})
</script>

<style scoped>
main {
    background-image: url("https://picsum.photos/1280");
    height: 100%;
}

main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(29, 105, 171, 0.7);
}

.container {
    max-width: 600px;
    width: 100%;
    background-color: var(--color-white);
    padding: 20px;
    opacity: 0;
    bottom: -50px;
    transition: all 1.5s ease-in-out;
}

.container.show {
    opacity: 1;
    bottom: 0;
}

.section-header {
    text-align: center;
    margin: 0 0 50px;
}
</style>