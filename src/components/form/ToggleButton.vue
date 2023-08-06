<template>
    <div class="toggle-button-container">
        <a
            href="javascript:void(0)"
            class="toggle-item"
            v-for="( option ) in options"
            :class="{ selected: option.value === active.value }"
            :style="`width: ${100 / options.length}%`"
            @click="toggle_option( option );"
            >
            {{ option.label }}
        </a>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ToggleButton",
    data() {
        return {
            active: {}
        }
    },
    props: {
        options: {
            default: [],
            type: Array
        },
        modelValue: {
            default: ""
        }
    },
    methods: {
        toggle_option( option ) {
            this.active = option
            this.update_model()
        },
        update_model() {
            this.$emit('update:modelValue', this.active.value)
        }
    },
    mounted() {
        if( this.options.length ) {
            this.active = this.options[0]
            this.update_model()
        }
    }
})
</script>

<style scoped>
.toggle-button-container {
    display: flex;
    margin: 0 0 15px;
}
.toggle-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 15px 20px;
    border: 1px solid var(--color-black);
    transition: all 0.3s ease-in-out;
}
.toggle-item.selected {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-white);
}
</style>