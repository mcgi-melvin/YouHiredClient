<template>
    <footer>
        <router-link :to="{ name: 'user' }">
            <img src="../assets/images/home-solid.png" alt="Home" />
        </router-link>
        <router-link :to="{ name: 'user-message' }">
            <img src="../assets/images/comments-solid.png" alt="Messages" />
        </router-link>
        <router-link :to="{ name: 'user' }">
            <img src="../assets/images/users-solid.png" alt="Candidates" />
        </router-link>
        <router-link :to="{ name: 'user-setup' }">
            <img src="../assets/images/cogs-solid.png" alt="Settings" />
        </router-link>
    </footer>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Footer"
})
</script>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: var(--height-footer);
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
}
</style>