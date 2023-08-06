<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "UserMessages"
})
</script>

<template>
    <div class="wrapper-message">
        <router-view />
    </div>
</template>

<style scoped>
.wrapper-message {
    height: 100%;
    padding: 0 10px;
    overflow-y: auto;
}
</style>