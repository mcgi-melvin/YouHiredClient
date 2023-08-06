<template>
    <div class="wrapper-profile">
        <div class="section-avatar">
            <div class="user-avatar" @click="upload_avatar">
                <img class="avatar-preview" :src="profile.avatar ?? image_placeholder" alt="" />
                <input id="avatar_upload" type="file" @change="process_image_upload" hidden>
            </div>
        </div>
        <div class="section-fields">
            <div class="field">
                <label>First Name</label>
                <InputField v-model="profile.first_name" placeholder="First Name" />
            </div>
            <div class="field">
                <label>Last Name</label>
                <InputField v-model="profile.last_name" placeholder="Last Name" />
            </div>
            <div class="field">
                <label>Role</label>
                <InputField v-model="profile.role" placeholder="Role" />
            </div>
            <div class="field">
                <label>Desired Salary</label>
                <InputField v-model="profile.salary" placeholder="Salary" />
            </div>
            <div class="field">
                <label>Years of Experience</label>
                <InputField v-model="profile.years_of_experience" placeholder="Years of Experience" />
            </div>
            <div class="field">
                <label>Skills</label>
                <InputField v-model="profile.skills" placeholder="Skills" />
            </div>
        </div>
        <div class="section-about">
            <div class="field">
                <label>About</label>
                <TextareaField v-model="profile.about" placeholder="About (min 250 words)" />
            </div>
        </div>
        <div class="section-fields section-social">
            <div class="field">
                <label>Skype</label>
                <InputField v-model="profile.skype" type="url" placeholder="Skype" />
            </div>
            <div class="field">
                <label>Facebook</label>
                <InputField v-model="profile.facebook" type="url" placeholder="Facebook" />
            </div>
            <div class="field">
                <label>Linkedin</label>
                <InputField v-model="profile.linkedin" type="url" placeholder="Linkedin" />
            </div>
        </div>
    </div>
    <div class="wrapper-footer">
        <Button label="Save"></Button>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import InputField from "@/components/form/InputField.vue";
import Button from "@/components/form/Button.vue";
import {user} from "@/stores/user";
import TextareaField from "@/components/form/TextareaField.vue";
import avatar_placeholder from "@/assets/images/avatar-placeholder.png"

export default defineComponent({
    name: "UserProfile",
    components: { InputField, TextareaField, Button },
    data() {
        return {
            profile: user(),
            image_placeholder: avatar_placeholder
        }
    },
    methods: {
        upload_avatar() {
            document.getElementById("avatar_upload").click()
        },
        process_image_upload: function (e) {
            const file = e.target.files[0],
                url = URL.createObjectURL(file);
            this.profile.avatar = url
        }
    },
    mounted() {

    }
})
</script>

<style scoped>
.user-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid var(--color-black);
    margin: auto;
    overflow: hidden;
}

.user-avatar img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.section-fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin: 40px 0 0;
}

label {
    display: block;
    font-size: var(--fs17);
    letter-spacing: 1px;
    margin: 0 0 15px;
}
</style>