<template>
    <div class="form-input">
        <label>{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" autocomplete="off" />
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "InputField",
    props: {
        label: {
            default: "",
            type: String
        },
        type: {
            default: "text",
            type: String
        },
        placeholder: {
            default: "",
            type: String
        },
        modelValue: {
            default: ""
        }
    }
})
</script>

<style scoped>
.form-input {
    margin: 0 0 15px;
}

.form-input input {
    font-size: 14px;
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-black);
    padding: 15px 20px;
    outline: none;
}
</style>