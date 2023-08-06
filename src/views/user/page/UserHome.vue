<template>
    <JobList />
</template>

<script>
import {defineComponent} from 'vue'
import JobList from "@/components/job/JobList.vue";

export default defineComponent({
    name: "UserHome",
    components: { JobList }
})
</script>

<style scoped>

</style>