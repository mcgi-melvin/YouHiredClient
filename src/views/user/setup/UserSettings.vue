<template>
    <div class="wrapper-settings">
        <div class="section-plan">
            <div class="plan-current">
                <div class="fs17">Membership</div>
                <div class="fs14 user-plan">Starter - Free</div>
            </div>
            <div class="plan-action">
                <router-link class="button button-primary" :to="{ name: 'user-settings' }">Select Plan</router-link>
            </div>
        </div>
        <div class="section-checkboxes">
            <div class="heading fs17">Show Profile in Candidate List</div>
            <div class="fields">
                <ToggleButton v-model="settings.show_profile" :options="[{ label: 'Yes', value: true }, { label: 'No', value: false }]" />
            </div>
        </div>
        <div class="section-password-change">
            <div class="heading fs17">Change Password</div>
            <div class="fields">
                <InputField type="password" v-model="settings.password_old" placeholder="Old Password"></InputField>
                <InputField type="password" v-model="settings.password_old_confirm" placeholder="Confirm Old Password"></InputField>
                <InputField type="password" v-model="settings.password_new" placeholder="New Password"></InputField>
                <InputField type="password" v-model="settings.password_new_confirm" placeholder="Confirm New Password"></InputField>
            </div>
        </div>
    </div>
    <div class="wrapper-footer">
        <Button label="Save" />
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import ToggleButton from "@/components/form/ToggleButton.vue";
import InputField from "@/components/form/InputField.vue";
import Button from "@/components/form/Button.vue";
import {settings} from "@/stores/settings";

export default defineComponent({
    name: "UserSettings",
    components: { InputField, ToggleButton, Button },
    data() {
        return {
            settings: settings()
        }
    }
})
</script>

<style scoped>
.heading {
    letter-spacing: 1px;
}

.wrapper-settings > div:not(:first-child) {
    margin: 30px 0 0;
}

.section-plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.plan-action {
    width: 280px;
    max-width: 100%;
}

.user-plan {
    letter-spacing: 1px;
}

.fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin: 15px 0 0;
}
</style>