<template>
    <header>
        <img src="../assets/images/logo.png" alt="Logo" />
    </header>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Header"
})
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--height-header);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>