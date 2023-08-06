<template>
    <div class="button-container">
        <button :type="type" :class="['button', `button-${color}`]">{{ label }}</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
    props: {
        label: {
            default: "Submit",
            type: String
        },
        color: {
            default: "primary",
            type: String
        },
        type: {
            default: "button",
            type: String
        }
    }
})
</script>

<style scoped>
.button-container {
    margin: 0 0 15px;
}
button {
    letter-spacing: 2px;
}
</style>