import { defineStore } from 'pinia'

export const user = defineStore('user', {
    state: () => ({
        email: null,
        username: null,
        password: null,
        avatar: null,
        first_name: null,
        last_name: null,
        role: null,
        salary: null,
        years_of_experience: null,
        skills: null,
        about: null,
        skype: null,
        facebook: null,
        linkedin: null
    }),
    getters: {

    },
    actions: {
        update_profile() {

        }
    }
})