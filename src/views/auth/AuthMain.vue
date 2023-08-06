<template>
    <main class="bg-cover position-relative d-flex align-items-center justify-content-center">
        <div class="position-relative">
            <div class="form-container">
                <div class="section-header">
                    <img src="../../assets/images/logo.png" alt="App Logo" />
                </div>
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "AuthMain"
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

main > div {
    max-width: 600px;
    width: 100%;
    margin: auto;
    padding: 0 30px;
}

.form-container {
    background-color: var(--color-white);
    padding: 50px 40px;
}

.form-container .section-header {
    text-align: center;
    margin: 0 0 45px
}
</style>