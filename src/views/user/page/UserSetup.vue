<template>
    <div class="container">
        <div class="section-header">
            <router-link :to="{ name: 'user-settings' }">Settings</router-link>
            <router-link :to="{ name: 'user-profile' }">Profile</router-link>
        </div>
        <div class="section-body">
            <router-view />
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "UserSetup"
})
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
.section-header {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
}
.section-header a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--color-white2);
    height: 50px;
}
.section-header a.router-link-exact-active {
    background-color: var(--color-primary);
    color: var(--color-white);
}
.section-body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 50px);
    padding: 30px 20px;
}

.section-body:deep() > div {
    padding: 0 20px;
}

.section-body:deep() > div:first-child {
    height: calc(100% - 80px);
    overflow: auto;
}
</style>