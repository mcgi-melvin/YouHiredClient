<template>
    <router-link :to="{ name: 'message-view', params: { id: message.id } }" class="message-item" v-for="message of messages">
        <div class="user">
            <span class="fs17">{{ message.user.first_name }} {{ message.user.last_name }}</span>
        </div>
        <div class="message">
            {{ message.message }}
        </div>
    </router-link>
</template>

<script>
import {defineComponent} from 'vue'
import messages from "@/assets/seeds/messages";

export default defineComponent({
    name: "UserMessageList",
    data() {
        return {
            messages: messages
        }
    }
})
</script>

<style scoped>
.message-item {
    display: block;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 0 0 20px;
}
.user span {
    letter-spacing: 1px;
}
.message {
    margin: 15px 0 0;
}
</style>