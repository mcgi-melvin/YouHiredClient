<template>
    <div class="form-textarea">
        <textarea rows="7" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" autocomplete="off" />
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "TextareaField",
    props: {
        placeholder: {
            type: String
        },
        modelValue: {
            default: ""
        }
    }
})
</script>

<style scoped>
.form-textarea {
    margin: 0 0 15px;
}

.form-textarea textarea {
    font-size: 14px;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-black);
    padding: 15px 20px;
    outline: none;
}
</style>