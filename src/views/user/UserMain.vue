<template>
    <Header />

    <main>
        <router-view />
    </main>

    <Footer />
</template>

<script>
import {defineComponent} from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    name: "UserMain",
    components: { Header, Footer }
})
</script>

<style scoped>
main {
    height: calc(100vh - 70px - 100px);
    padding: 30px 20px;
}
</style>